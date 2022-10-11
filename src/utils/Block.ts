/* eslint-disable class-methods-use-this */
import { nanoid } from 'nanoid';
import Handlebars from 'handlebars';

import EventBus from './EventBus';

export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  id = nanoid(6);
  #element: HTMLElement;
  protected children: Record<string, Block>;
  protected readonly props: {
    events: Record<string, () => void>,
    [index: string]: any
  };

  #eventBus: () => EventBus;

  static extractChildren(rawProps: any) {
    const children: any = {};
    const props: any = {};
    Object.entries(rawProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, children };
  }

  constructor(rawProps = {}) {
    const { props, children = {} } = Block.extractChildren(rawProps);
    this.props = this.#makePropsProxy(props);
    this.children = children;
    const eventBus = new EventBus();
    this.#eventBus = () => eventBus;
    this.#registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  /** <code style="color: #952dd2">Block lifecycle</code> -
   *  cycle start with <code style="color: #007ba7">constructor</code> emitting
   *  <code style="color: #007ba7">EVENTS.INIT</code>  <br>
   *    register lifecycle methods on lifecycle events, <br>
   *    when  somewhere event will be emitted, dedicated method will run */
  #registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.#init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this.#componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this.#componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this.#render.bind(this));
  }

  #init() {
    this.#eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  /** <code style="color: #952dd2">FLOW_CDM</code> -
   *  happened after mounting <code style="color: #007ba7">Block into parent</code>. <br>
   *     You should dispatch this life cycle action externally,
   *     by calling <code style="color: #007ba7">dispatchComponentDidMount()</code> */
  #componentDidMount() {
    this.componentDidMount();
  }

  protected componentDidMount(): void {}
  dispatchComponentDidMount() {
    this.#eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  /** <code style="color: #952dd2">FLOW_CDU</code> -
   *  happened after updating <code style="color: #007ba7">Block`s props</code> . <br>
   *     This action is emitted when
   *     someone trying to change <code style="color: #007ba7">props</code> and
   *     <code style="color: #007ba7">proxy</code> catch it */
  #componentDidUpdate(oldProps: any, newProps: any) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) this.#eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected componentDidUpdate(oldProps: any, newProps: any): boolean { return oldProps !== newProps; }

  /** <code style="color: #952dd2">FLOW_RENDER</code> -
   *  happened before <code style="color: #952dd2">FLOW_CDU</code>
   *  or after <code style="color: #952dd2">FLOW_CDU</code> */
  #render() {
    const templateString = this.render();
    const newElem = this.compile(templateString);
    if (this.#element) this.#element.replaceWith(newElem);
    this.#element = newElem;
    this.#addListeners();
  }

  protected render(): string { return ''; }

  compile(templateString: string): HTMLElement {
    // Get template,
    const template = Handlebars.compile(templateString);
    const fragment = document.createElement('template');

    // compile it with data,
    // use fragment to get DOM node instead of string
    fragment.innerHTML = template({ ...this.props, children: this.children });

    // template inject stub in place where our "controlled child" should be
    // than we should stub.replaceWith(childElement)
    Object.values(this.children).forEach((block) => {
      const stub = fragment.content.querySelector(`[data-id="id-${block.id}"]`);
      if (stub) stub.replaceWith(block.getContent());
      else throw new Error('Нет stub\'а для вставки block\'a');
    });

    return fragment.content.firstElementChild as HTMLElement;
  }

  /** <code style="color: #952dd2">SET PROPS WITH PROXY</code> -
   * <code style="color: #007ba7">proxy</code> is used in order to get control over setup new
   * <code style="color: #007ba7">props</code>,  */
  setProps = (newProps: any) => {
    if (!newProps) {
      return;
    }

    Object.assign(this.props, newProps);
  };

  #makePropsProxy(props: any): any {
    const self = this;
    return new Proxy(props, {
      get(target: Record<string, unknown>, prop: string, receiver: any) {
        const value = Reflect.get(target, prop, receiver);
        return typeof value === 'function' ? value.bind(self) : value;
      },
      set(target: Record<string, unknown>, prop: string, value: unknown, receiver: any) {
        const oldProps = { ...target };
        const reflectNewProps = Reflect.set(target, prop, value, receiver);
        self.#eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
        return reflectNewProps;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  #addListeners() {
    if (!this.props.events) return;
    const { events } = this.props;
    Object.entries(events).forEach(([event, listener]) => {
      this.#element.addEventListener(event, listener);
    });
  }

  getContent() {
    return this.#element;
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}

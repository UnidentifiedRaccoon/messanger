/* eslint-disable class-methods-use-this */
import { nanoid } from 'nanoid';
import Handlebars from 'handlebars';

import { isEqual } from '../common/objectHelpers';

import EventBus from './EventBus';

export type Events = Record<string, (...args: any[]) => void>;

export type BaseProps = {
  events?: Events,
  [index: string]: any // Блок не знает о типах пропсов. Типы пропсов определяют наследники класс Block
};

type Children = Record<string, Block<BaseProps>>;

export default class Block<Props extends BaseProps> {
  static className: string = 'Block';

  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_CWU: 'flow:component-will-unmount',
    FLOW_RENDER: 'flow:render',
  };

  id = nanoid(6);
  // @ts-ignore - ругается на то что нет инициализации
  // Так и задумано, #element инициализируется в результате вызова render колбека
  // А вызов render колбека как раз и тригерится в конструкторе
  #element: HTMLElement;
  protected children: Record<string, Block<BaseProps>> = {};
  protected propChildren: Record<string, Block<BaseProps>>;
  protected props: Props;

  protected refs: { [key: string]: Block<BaseProps> } = {};

  #eventBus: () => EventBus<typeof Block.EVENTS>;

  extractChildren(rawProps: Props) {
    const children: Children = {};
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

  constructor(rawProps: Props) {
    const { props, children = {} } = this.extractChildren(rawProps);
    this.props = this.#makePropsProxy(props) as Props;
    this.propChildren = children;
    const eventBus = new EventBus<typeof Block.EVENTS>();
    this.#eventBus = () => eventBus;
    this.#registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  /** <code style="color: #952dd2">Block lifecycle</code> -
   *  cycle start with <code style="color: #007ba7">constructor</code> emitting
   *  <code style="color: #007ba7">EVENTS.INIT</code>  <br>
   *    register lifecycle methods on lifecycle events, <br>
   *    when  somewhere event will be emitted, dedicated method will run */
  #registerEvents(eventBus: EventBus<typeof Block.EVENTS>) {
    eventBus.on(Block.EVENTS.INIT, this.#init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this.#componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this.#componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CWU, this.#componentWillUnmount.bind(this));
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
    Object.values(this.children).forEach((child) => child.dispatchComponentDidMount());
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
  #componentDidUpdate(oldProps: Props, newProps: Props) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) this.#eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    return !isEqual(oldProps, newProps);
  }

  #componentWillUnmount() {
    this.#eventBus().destroy();
    this.componentWillUnmount();
  }

  protected componentWillUnmount(): void {}
  dispatchComponentWillUnmount() {
    this.#eventBus().emit(Block.EVENTS.FLOW_CWU);
  }

  /** <code style="color: #952dd2">FLOW_RENDER</code> -
   *  happened before <code style="color: #952dd2">FLOW_CDU</code>
   *  or after <code style="color: #952dd2">FLOW_CDU</code> */
  #render() {
    const templateString = this.render();
    const newElem = this.compile(templateString);
    if (this.#element) {
      // ToDo Потеря ссылки на элемент
      // По непонятной причине this.#element иногда содержит не валидную ссылку
      // Поэтому замена вида  this.#element.replaceWith(newElem); становится невозможной
      const classElem = Array.from(this.#element.classList.entries());
      const query = Array.from(document.querySelectorAll(`.${classElem[classElem.length - 1][1]}`));
      if (query.length === 1) {
        query[0].replaceWith(newElem);
      } else {
        this.#element.replaceWith(newElem);
        // throw new Error('Could not find element for replaceWith()');
      }
    }
    this.#element = newElem;
    this.#addListeners();
  }

  protected render(): string { return ''; }

  compile(templateString: string): HTMLElement {
    // Get template,
    const template = Handlebars.compile(templateString);
    const fragment = document.createElement('template');

    // compile it with props,
    // use fragment to get DOM node from string
    // During template() fn run, app fill this.children with
    // new ChildComponent, so before template run, need to remove old children
    // and set this.children with link to the new object {}
    this.children = { ...this.propChildren };
    fragment.innerHTML = template({ ...this.props, children: this.children, refs: this.refs }, {
      allowProtoPropertiesByDefault: true,
    });

    // template inject stub in place where our "controlled child" should be
    // than we should stub.replaceWith(childElement)
    Object.values(this.children).forEach((block) => {
      const stub = fragment.content.querySelector(`[data-id="id-${block.id}"]`);
      if (stub) {
        stub.replaceWith(block.getContent());

        // layout - actually idk how it works
        const slotContent = block.getContent().querySelector('[data-slot="1"]');
        if (slotContent) {
          slotContent.replaceWith(...stub.childNodes);
        }
      } else throw new Error('Нет stub\'а для вставки block\'a');
    });
    // template inject stub in place where our "layout content" should be

    return fragment.content.firstElementChild as HTMLElement;
  }

  /** <code style="color: #952dd2">SET PROPS WITH PROXY</code> -
   * <code style="color: #007ba7">proxy</code> is used in order to get control over setup new
   * <code style="color: #007ba7">props</code>,  */
  setProps = (newProps: Partial<Props>) => {
    if (!newProps) {
      return;
    }
    Object.assign(this.props, newProps);
  };

  #makePropsProxy(props: Props): Record<string, unknown> {
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

  getContent(): HTMLElement {
    return this.#element;
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }

  destroy() {
    this.getContent().remove();
    this.#eventBus().destroy();
    // @ts-ignore
    this.#element = null;
    // @ts-ignore
    this.children = null;
    // @ts-ignore
    this.propChildren = null;
    // @ts-ignore
    this.props = null;
    // @ts-ignore
    this.refs = null;
    // @ts-ignore
    this.#eventBus = null;
  }
}

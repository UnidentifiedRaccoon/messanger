/* eslint-disable class-methods-use-this */
import EventBus from './EventBus';

export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  #element: HTMLElement;
  readonly #meta: { tagName: string, props: any };
  readonly #props: any;
  #eventBus: () => EventBus;

  protected constructor(tagName = 'div', props = {}) {
    this.#meta = {
      tagName,
      props,
    };
    this.#props = this.#makePropsProxy(props);

    const eventBus = new EventBus();
    this.#eventBus = () => eventBus;
    this.#registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  #registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.#init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this.#componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this.#componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this.#render.bind(this));
  }

  #init() {
    document.createElement(this.#meta.tagName);
    this.#eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  /** <code style="color: #952dd2">FLOW_CDM</code> -
   *  happened after mounting <code style="color: #007ba7">Block into parent</code>. <br>
   *     You should dispatch this life cycle action externally,
   *     by calling <code style="color: #007ba7">dispatchComponentDidMount()</code> */
  #componentDidMount() {
    this.componentDidMount();
  }

  // eslint-disable-next-line
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

  protected componentDidUpdate(oldProps: any, newProps: any): boolean { return oldProps === newProps; }

  /** <code style="color: #952dd2">FLOW_RENDER</code> -
   *  happened before <code style="color: #952dd2">FLOW_CDU</code>
   *  or after <code style="color: #952dd2">FLOW_CDU</code> */
  #render() {
    this.#element.innerHTML = this.render();
  }

  protected render(): string { return ''; }

  /** <code style="color: #952dd2">SET PROPS WITH PROXY</code> -
   * <code style="color: #007ba7">proxy</code> is used in order to get control over setup new
   * <code style="color: #007ba7">props</code>,  */
  setProps = (newProps: any) => {
    if (!newProps) {
      return;
    }

    Object.assign(this.#props, newProps);
  };

  #makePropsProxy(props: any): any {
    const self = this;
    return new Proxy(props, {
      get(target: Record<string, unknown>, prop: string, receiver: any) {
        const value = Reflect.get(target, prop, receiver);
        return typeof value === 'function' ? value.bind(self) : value;
      },
      set(target: Record<string, unknown>, prop: string, value: unknown, receiver: any) {
        const newProps = { ...target };
        newProps[prop] = value;
        self.#eventBus().emit(Block.EVENTS.FLOW_CDU, target, newProps);
        return Reflect.set(target, prop, value, receiver);
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
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

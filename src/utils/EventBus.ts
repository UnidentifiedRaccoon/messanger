export default class EventBus {
  /** <code style="color: #952dd2">Event Bus Pattern</code> -
   *  variation of pub/sub or observer pattern. <br>
   *     <code style="color: #007ba7">EventBus</code>
   *     encapsulate observer logic in it`s instance:
   *        -  <code style="color: #007ba7">on()</code> - subscribe cb on event
   *        -  <code style="color: #007ba7">off()</code> - unsubscribe cb on event
   *        -  <code style="color: #007ba7">emit()</code> - call all cbs on event */
  readonly #listeners: Record<string, Function[]>;
  constructor() {
    this.#listeners = {};
  }

  on(event: string, callback: Function): void {
    if (!this.#listeners[event]) {
      this.#listeners[event] = [];
    }

    this.#listeners[event].push(callback);
  }

  off(event: string, callback: Function): void {
    if (!this.#listeners[event]) throw new Error('Попытка удаления обработчика на несуществующем событии');

    this.#listeners[event] = this.#listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  emit(event: string, ...args: any[]): void {
    if (!this.#listeners[event]) return;
    this.#listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}

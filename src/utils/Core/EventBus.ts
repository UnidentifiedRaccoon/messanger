type Handler<Args extends any[] = any[]> = (...args: Args) => void;

export default class EventBus<Events extends Record<string, string>> {
  /** <code style="color: 952dd2">Event Bus Pattern</code> -
   *  variation of pub/sub or observer pattern. <br>
   *     <code style="color: 007ba7">EventBus</code>
   *     encapsulate observer logic in it`s instance:
   *        -  <code style="color: 007ba7">on()</code> - subscribe cb on event
   *        -  <code style="color: 007ba7">off()</code> - unsubscribe cb on event
   *        -  <code style="color: 007ba7">emit()</code> - call all cbs on event */

  private listeners: {
    [K in Events[keyof Events]]?: Handler[]
  } = {};

  constructor() {
    this.listeners = {};
  }

  on<Event extends Events[keyof Events]>(event: Event, callback: Handler): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(callback);
  }

  off<Event extends Events[keyof Events]>(event: Event, callback: Handler): void {
    if (!this.listeners[event]) throw new Error('Попытка удаления обработчика на несуществующем событии');

    this.listeners[event] = this.listeners[event]!.filter(
      (listener) => listener !== callback,
    );
  }

  // any использованною осознанно, я не хочу как-либо контролировать/ограничивать передачу параметров
  emit<Event extends Events[keyof Events]>(event: Event, ...args: any[]): void {
    if (!this.listeners[event]) return;
    this.listeners[event]!.forEach((listener) => {
      listener(...args);
    });
  }

  destroy(): void {
    this.listeners = {};
  }
}

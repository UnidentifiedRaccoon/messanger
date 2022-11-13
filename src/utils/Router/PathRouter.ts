import IRouter from './IRouter';

class PathRouter implements IRouter {
  private routes: Record<string, Function> = {};
  private stack: string[] = [];
  private current: number = -1;

  constructor() {
    this.onRouteChange = this.onRouteChange.bind(this);
    window.addEventListener('locationchange', () => {
      this.onRouteChange();
    });
  }

  onRouteChange() {
    const { pathname } = window.location;
    const path = pathname.split('/').slice(1);
    const parent = `/${path[0]}`;

    if (parent === this.stack[this.current]) return;
    this.stack.push(parent);
    this.current += 1;

    const route = Object.keys(this.routes).find((routePathname) => this.stack[this.current] === routePathname);
    if (route) this.routes[route]();
    else if (this.routes['*']) this.routes['*']();
    else {
      throw new Error('Ошибка на клиенте, отсутствует страница ошибки');
    }
  }

  use(pathname: string, cb: Function) {
    this.routes[pathname] = cb;
    return this;
  }

  go(pathname: string) {
    window.history.pushState({}, '', pathname);
  }

  back() {
    window.history.back();
  }

  forward() {
    window.history.forward();
  }

  reload() {
    const route = Object.keys(this.routes).find((routePathname) => this.stack[this.current] === routePathname);
    if (route) this.routes[route]();
    else if (this.routes['*']) this.routes['*']();
    else {
      throw new Error('Ошибка на клиенте, отсутствует страница ошибки');
    }
  }
}

export default new PathRouter();

import IRouter from './IRouter';

class PathRouter implements IRouter {
  private routes: Record<string, Function> = {};
  constructor() {
    this.onRouteChange = this.onRouteChange.bind(this);
    window.addEventListener('locationchange', () => {
      this.onRouteChange();
    });
    this.onRouteChange();
  }

  onRouteChange() {
    // вместо routePathname можно например хранить Regex, тогда
    // можно выбрать pathname соответствующий Regex, а не прямому сравнению c routePathname
    const { pathname } = window.location;
    // const path = pathname.slice(1);
    const route = Object.keys(this.routes).find((routePathname) => pathname === routePathname);
    if (route) this.routes[route]();
    else if (this.routes['/']) this.routes['/']();
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
}

export default new PathRouter();

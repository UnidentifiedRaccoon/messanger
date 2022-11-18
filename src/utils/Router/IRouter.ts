export default interface IRouter {
  use(pathname: string, cb: Function): IRouter;

  onRouteChange(): void
  go(pathname: string): void;
  back(): void;
  forward(): void;
}

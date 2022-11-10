import registrar from './utils/Core/registrar';
import PathRouter from './utils/Router/PathRouter';
import renderDOM from './utils/Core/renderDOM';
import { Screens } from './utils/Router/Screens';

const updatePage = (event: Event) => {
  if (event.target instanceof HTMLAnchorElement) {
    event.preventDefault();
    PathRouter.go(event.target.href);
  }
};

const initRouter = () => {
  Object.values(Screens).forEach((screen) => {
    PathRouter.use(screen.path, () => {
      renderDOM('#core-app', new screen.Block({}));
    });
  });
  const currentPath = window.location.pathname;
  PathRouter.go(currentPath);
};

window.addEventListener('DOMContentLoaded', () => {
  registrar();
  initRouter();
  const links = [...document.querySelectorAll('.header__nav a[href]')];
  links.forEach((link) => { link.addEventListener('click', updatePage); });
});

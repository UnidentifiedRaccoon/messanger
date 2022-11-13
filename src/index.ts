import registrar from './utils/Core/registrar';
import PathRouter from './utils/Router/PathRouter';
import renderDOM from './utils/Core/renderDOM';
import { Screens } from './utils/Router/Screens';
import store, {
  AppState, Selectors, Store, Thunks,
} from './utils/Store/Store';
import ClientError from './app/pages/ClientError';
import { Routes } from './utils/Router/Routes';
import xor from './utils/common/xor';

const updatePage = (event: Event) => {
  if (event.target instanceof HTMLAnchorElement) {
    event.preventDefault();
    PathRouter.go(event.target.href);
  }
};

const initRouter = () => {
  Object.values(Screens).forEach((screen) => {
    PathRouter.use(screen.path, () => {
      const isAuthorized = Boolean(Selectors.authStatus());
      if (xor(isAuthorized, !screen.shouldAuthorized)) {
        renderDOM('#core-app', new screen.Block({}));
      } else if (!isAuthorized && Object.values(Routes).map((x) => x.path).includes(screen.path)) {
        // Здесь должен быть именно компонент с ссылкой на вход
        // Так как приложение может ожидать загрузки данных и как только они загрузятся, автоматически
        // обновит страницу -> в force redirect to login нет смысла
        renderDOM('#core-app', new ClientError({}));
      } else {
        // when user logged in, pages like signup/login will return 404 notFound
        // with move back to app
        renderDOM('#core-app', new ClientError({}));
      }
    });
  });
  const currentPath = window.location.pathname;
  PathRouter.go(currentPath);
  store.on(Store.EVENTS.CHANGE, (_: AppState, newProps: AppState) => {
    if (newProps.store.authStatus) PathRouter.reload();
  });
};

window.addEventListener('DOMContentLoaded', async () => {
  registrar();
  Thunks.revalidateUser();
  initRouter();
  const links = [...document.querySelectorAll('.header__nav a[href]')];
  links.forEach((link) => { link.addEventListener('click', updatePage); });
});

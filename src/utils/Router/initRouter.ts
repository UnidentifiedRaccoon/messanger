import store, { AppState, Selectors, Store } from '../Store/Store';
import xor from '../common/xor';
import renderDOM from '../Core/renderDOM';

import ClientError from '../../app/pages/ClientError';

import { Routes } from './Routes';
import PathRouter from './PathRouter';
import { Screens } from './Screens';

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
      } else if (screen.path === Routes.Login.path || screen.path === Routes.SignUp.path) {
        // when user logged in, pages like signup/login will return 404 notFound
        // with move back to app
        PathRouter.go(Routes.Workspace.path);
      } else {
        renderDOM('#core-app', new ClientError({}));
      }
    });
  });
  const currentPath = window.location.pathname;
  PathRouter.go(currentPath);
  store.on(Store.EVENTS.CHANGE, (oldProps: AppState, newProps: AppState) => {
    if (oldProps.store.authStatus !== newProps.store.authStatus) {
      PathRouter.reload();
    }
  });
};

export default initRouter;

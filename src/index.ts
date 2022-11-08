import ClientError from './app/pages/ClientError';
import ServerError from './app/pages/ServerError';
import Login from './app/pages/Login';
import SignIn from './app/pages/SignIn';
import Workspace from './app/pages/Workspace';
import Profile from './app/pages/Profile';
import ChangeInfo from './app/pages/Profile/ChangeInfo';
import ChangePassword from './app/pages/Profile/ChangePassword';

import renderDOM from './utils/Core/renderDOM';
import registrar from './utils/Core/registrar';
import PathRouter from './utils/Router/PathRouter';
import Block from './utils/Core/Block';

export type Screen = { path: string, Block: typeof Block, shouldAuthorized: boolean };

type ScreenNames = 'ClientError'
| 'ServerError'
| 'Login'
| 'SignIn'
| 'Workspace'
| 'Profile'
| 'ChangeInfo'
| 'ChangePassword';

const Screens: Record<ScreenNames, Screen> = {
  ClientError: {
    path: '/',
    Block: ClientError,
    shouldAuthorized: false,
  },
  ServerError: {
    path: '/5xx',
    Block: ServerError,
    shouldAuthorized: false,
  },
  Login: {
    path: '/login',
    Block: Login,
    shouldAuthorized: false,
  },
  SignIn: {
    path: '/sign_in',
    Block: SignIn,
    shouldAuthorized: false,
  },
  Workspace: {
    path: '/workspace',
    Block: Workspace,
    shouldAuthorized: true,
  },
  Profile: {
    path: '/profile',
    Block: Profile,
    shouldAuthorized: true,
  },
  ChangeInfo: {
    path: '/change_info',
    Block: ChangeInfo,
    shouldAuthorized: true,
  },
  ChangePassword: {
    path: '/change_password',
    Block: ChangePassword,
    shouldAuthorized: true,
  },
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

const updatePage = (event: Event) => {
  if (event.target instanceof HTMLAnchorElement) {
    event.preventDefault();
    PathRouter.go(event.target.href);
  }
};

window.addEventListener('DOMContentLoaded', () => {
  registrar();
  initRouter();
  const links = [...document.querySelectorAll('.header__nav a[href]')];
  links.forEach((link) => { link.addEventListener('click', updatePage); });
});

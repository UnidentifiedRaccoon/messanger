import ClientError from 'pages/ClientError';
import ServerError from 'pages/ServerError';
import Login from 'pages/Login';
import SignIn from 'pages/SignIn';
import Workspace from 'pages/Workspace';
import Profile from 'pages/Profile';
import ChangeInfo from 'pages/Profile/ChangeInfo';
import ChangePassword from 'pages/Profile/ChangePassword';

import renderDOM from './utils/Core/renderDOM';
import registrar from './utils/Core/registrar';

const PAGES_PATHNAME = {
  CLIENT_ERROR: '/4xx',
  SERVER_ERROR: '/5xx',
  SIGN_IN: '/sign_in',
  LOGIN: '/login',
  PROFILE: '/profile',
  CHANGE_INFO: '/change_info',
  CHANGE_PASSWORD: '/change_password',
  WORKSPACE: '/workspace',
};

const updatePage = (event: Event) => {
  if (event.target instanceof HTMLAnchorElement) {
    event.preventDefault();
    window.history.pushState(null, '', event.target.href);
  }
};

const loadPage = () => {
  const { pathname } = window.location;
  switch (pathname) {
    case PAGES_PATHNAME.CLIENT_ERROR:
      renderDOM('#core-app', new ClientError({}));
      break;
    case PAGES_PATHNAME.SERVER_ERROR:
      renderDOM('#core-app', new ServerError({}));
      break;
    case PAGES_PATHNAME.LOGIN:
      renderDOM('#core-app', new Login({}));
      break;
    case PAGES_PATHNAME.SIGN_IN:
      renderDOM('#core-app', new SignIn({}));
      break;
    case PAGES_PATHNAME.WORKSPACE:
      renderDOM('#core-app', new Workspace({}));
      break;
    case PAGES_PATHNAME.CHANGE_INFO:
      renderDOM('#core-app', new ChangeInfo({}));
      break;
    case PAGES_PATHNAME.CHANGE_PASSWORD:
      renderDOM('#core-app', new ChangePassword({}));
      break;
    case PAGES_PATHNAME.PROFILE:
      renderDOM('#core-app', new Profile({}));
      break;
    default: break;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  registrar();
  const links = [...document.querySelectorAll('.header__nav a[href]')];
  links.forEach((link) => { link.addEventListener('click', updatePage); });
  loadPage();
});

window.addEventListener('locationchange', () => {
  loadPage();
});

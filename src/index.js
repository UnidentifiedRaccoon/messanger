import notFound from './pages/4xx';
import serverError from './pages/5xx';
import signIn from './pages/sign_in';
import login from './pages/login';
import profile from './pages/profile';
import changeInfo from './pages/profile/change_info';
import changePassword from './pages/profile/change_password';
import workspace from './pages/workspace';
import './components';
import './widgets';

const PAGES_PATHNAME = {
  NOT_FOUND: '/4xx',
  SERVER_ERROR: '/5xx',
  SIGN_IN: '/sign_in',
  LOGIN: '/login',
  PROFILE: '/profile',
  CHANGE_INFO: '/change_info',
  CHANGE_PASSWORD: '/change_password',
  WORKSPACE: '/workspace',
};

const app = document.querySelector('#app');

const updatePage = (event) => {
  event.preventDefault();
  window.history.pushState(null, '', event.target.href);
};

const loadPage = () => {
  const { pathname } = window.location;
  switch (pathname) {
  case PAGES_PATHNAME.NOT_FOUND:
    app.innerHTML = notFound;
    break;
  case PAGES_PATHNAME.SERVER_ERROR:
    app.innerHTML = serverError;
    break;
  case PAGES_PATHNAME.SIGN_IN:
    app.innerHTML = signIn;
    break;
  case PAGES_PATHNAME.LOGIN:
    app.innerHTML = login;
    break;
  case PAGES_PATHNAME.PROFILE:
    app.innerHTML = profile;
    break;
  case PAGES_PATHNAME.CHANGE_INFO:
    app.innerHTML = changeInfo;
    break;
  case PAGES_PATHNAME.CHANGE_PASSWORD:
    app.innerHTML = changePassword;
    break;
  case PAGES_PATHNAME.WORKSPACE:
    app.innerHTML = workspace;
    break;
  default: break;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const links = [...document.querySelectorAll('.header__nav a[href]')];
  links.forEach((link) => { link.addEventListener('click', updatePage); });
  loadPage();
});

window.addEventListener('locationchange', () => {
  loadPage();
});

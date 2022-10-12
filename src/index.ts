import renderDOM from './utils/renderDOM';
import ClientError from './TSmigration/pages/ClientError';
import registrar from './registrar';

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

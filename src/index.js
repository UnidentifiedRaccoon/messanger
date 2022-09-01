import notFound from './pages/4xx';
import serverError from './pages/5xx';
import signIn from './pages/sign_in';

const PAGES_PATHNAME = {
  NOT_FOUND: '/4xx',
  SERVER_ERROR: '/5xx',
  SIGN_IN: '/sign_in',
};

window.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
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
  default: break;
  }
});

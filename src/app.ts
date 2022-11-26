import 'regenerator-runtime/runtime';

import './fonts.scss';
import './variables.scss';
import './common.scss';
import './app.scss';

import registrar from './utils/Core/registrar';
import PathRouter from './utils/Router/PathRouter';
import { Thunks } from './utils/Store/Store';
import informer from './utils/Core/informer';
import historyPatch from './utils/Router/historyPatch';
import initRouter from './utils/Router/initRouter';

const updatePage = (event: Event) => {
  if (event.target instanceof HTMLAnchorElement) {
    event.preventDefault();
    PathRouter.go(event.target.href);
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  historyPatch();
  registrar();
  Thunks.revalidateUser().then().catch((err) => informer(err.message));
  initRouter();
  const links = [...document.querySelectorAll('.header__nav a[href]')];
  links.forEach((link) => { link.addEventListener('click', updatePage); });
});

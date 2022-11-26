import historyPatch from '../utils/Router/historyPatch';
import initRouter from '../utils/Router/initRouter';
import registrar from '../utils/Core/registrar';

const initApp = () => {
  document.body.innerHTML = '<div id="core-app"></div>';
  registrar();
  historyPatch();
  initRouter();
};

export default initApp;

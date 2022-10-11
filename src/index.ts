import renderDOM from './utils/renderDOM';
import Support from './pages/Support';
import registerComponents from './utils/registerComponents';
import Button from './core/Button';

document.addEventListener('DOMContentLoaded', () => {
  registerComponents(Button);
  const support = new Support({});
  const
  renderDOM('#core-app', support);

});

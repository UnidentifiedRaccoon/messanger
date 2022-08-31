import template from './index.hbs';
import './components';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  app.innerHTML = template({ code: 404, message: 'Мы уже фиксим' });
});

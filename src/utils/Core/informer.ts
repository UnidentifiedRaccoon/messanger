import Toast from '../../app/Toast';

import renderDOM from './renderDOM';

const informer = (message: string) => {
  const toast = new Toast({ message });
  const toastWrapper = toast.getContent().querySelector('.toast') as HTMLElement;
  renderDOM('#informer', toast);
  setTimeout(() => {
    toastWrapper!.setAttribute('style', 'transform: translateX(0) !important;');
  }, 0);
  setTimeout(() => {
    toastWrapper!.setAttribute('style', 'transform: translateX(calc(100% + 110px))');
  }, 5000);
};

export default informer;

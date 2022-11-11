import Block from '../../utils/Core/Block';

import toastTmpl from './Toast.tmpl';
import * as styles from './Toast.module.scss';

interface PopupProps {
  message: string
  // type: string
}

export default class Toast extends Block {
  static className = 'Popup';
  constructor(props: PopupProps) {
    super({ ...props, styles });
  }

  render() {
    return toastTmpl();
  }
}

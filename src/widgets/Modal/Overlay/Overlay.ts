import Block from 'utils/Block';

import overlayTmpl from './Overlay.tmpl';
import * as styles from './Overlay.module.scss';

export default class Overlay extends Block {
  static className = 'Overlay';
  constructor(rawProps: any) {
    super({ ...rawProps, styles });
  }

  render() {
    return overlayTmpl();
  }
}

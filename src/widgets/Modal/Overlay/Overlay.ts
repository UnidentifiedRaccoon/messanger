import Block from 'utils/Block';

import overlayTmpl from './Overlay.tmpl';
import styles from './Overlay.module.scss';

export default class Overlay extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, styles });
  }

  render() {
    return overlayTmpl();
  }
}

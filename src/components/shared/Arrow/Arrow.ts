import arrow from 'bundle-text:./arrow.svg';

import Block from 'utils/Block';

import arrowTmpl from './Arrow.tmpl';
import * as styles from './Arrow.module.scss';

export default class Arrow extends Block {
  constructor(rawProps: any) {
    let dirMode;
    switch (rawProps.dirMode) {
      case 'top': dirMode = styles.top; break;
      case 'right': dirMode = styles.right; break;
      case 'bottom': dirMode = styles.bottom; break;
      default: dirMode = '';
    }
    super({
      ...rawProps,
      styles,
      arrow,
      dirMode,
    });
  }

  render() {
    return arrowTmpl();
  }
}

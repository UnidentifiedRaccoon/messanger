import cross from 'bundle-text:./cross.svg';

import Block from 'utils/Block';

import crossTmpl from './Cross.tmpl';
import * as styles from './Cross.module.scss';

export default class Cross extends Block {
  constructor(rawProps: any) {
    let typeMode;
    switch (rawProps.typeMode) {
      case 'delete': typeMode = styles.delete; break;
      case 'add': typeMode = styles.add; break;
      default: typeMode = '';
    }
    super({
      ...rawProps,
      styles,
      cross,
      typeMode,
    });
  }

  render() {
    return crossTmpl();
  }
}

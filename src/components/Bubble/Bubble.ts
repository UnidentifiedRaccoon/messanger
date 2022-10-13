import Block from 'utils/Block';

import bubbleTmpl from './Bubble.tmpl';
import * as styles from './Bubble.module.scss';

export default class Bubble extends Block {
  static className = 'Bubble';
  constructor(rawProps: any) {
    super({
      ...rawProps,
      styles,
    });
  }

  render() {
    return bubbleTmpl();
  }
}

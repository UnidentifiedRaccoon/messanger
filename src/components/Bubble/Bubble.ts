import Block from 'utils/Block';

import bubbleTmpl from './Bubble.tmpl';
import styles from './Bubble.module.scss';

export default class Bubble extends Block {
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

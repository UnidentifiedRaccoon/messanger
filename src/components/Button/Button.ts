import Block from 'utils/Block';

import buttonTmpl from './Button.tmpl';
import styles from './Button.module.scss';

export default class Button extends Block {
  constructor(rawProps: any) {
    super({
      ...rawProps,
      styles,
    });
  }

  render() {
    return buttonTmpl();
  }
}

import Block from 'utils/Block';

import buttonTmpl from './Button.tmpl';
import * as styles from './Button.module.scss';

export default class Button extends Block {
  static className = 'Button';
  constructor(rawProps: any) {
    super({
      ...rawProps,
      styles,
      events: {
        click: rawProps.onClick,
      },
    });
  }

  render() {
    return buttonTmpl();
  }
}

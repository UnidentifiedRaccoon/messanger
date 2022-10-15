import Block from 'utils/Block';

import buttonTmpl from './Button.tmpl';
import * as styles from './Button.module.scss';

interface ButtonProps {
  label: string
  outerStyles?: Record<string, string>
  onClick?: (e: Event) => void
}

export default class Button extends Block {
  static className = 'Button';
  constructor(props: ButtonProps) {
    super({
      styles,
      events: {
        click: props.onClick,
      },
    });
  }

  render() {
    return buttonTmpl();
  }
}

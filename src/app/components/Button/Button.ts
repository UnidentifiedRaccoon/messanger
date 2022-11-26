import Block, { BaseProps, Events } from '../../../utils/Core/Block';

import buttonTmpl from './Button.tmpl';
import styles from './Button.module.scss';

interface ButtonProps {
  label: string
  outerStyles?: Record<string, string>
  onClick?: (e: Event) => void
}

export default class Button extends Block<BaseProps> {
  static className = 'Button';
  constructor({ onClick, ...props }: ButtonProps) {
    const events: Events = {};
    if (onClick) events.click = onClick;
    super({
      ...props,
      styles,
      events,
    });
  }

  render() {
    return buttonTmpl();
  }
}

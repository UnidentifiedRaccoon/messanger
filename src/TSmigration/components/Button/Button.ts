import Block from '../../../utils/Block';

import buttonTmpl from './Button.tmpl';

interface ButtonProps {
  label: string
  onClick: () => void
}

export default class Button extends Block {
  constructor({ label, onClick }: ButtonProps) {
    super({
      label,
      events: {
        click: onClick,
      },
    });
  }

  render() {
    return buttonTmpl();
  }
}

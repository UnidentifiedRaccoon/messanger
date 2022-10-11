import Block from '../../utils/Block';

import template from './Button.tmpl';

interface ButtonProps {
  label: string
  onClick: () => void
}

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return template();
  }
}

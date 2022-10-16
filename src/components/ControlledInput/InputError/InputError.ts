import Block from 'utils/Block';

import inputErrorTmpl from './InputError.tmpl';

interface InputErrorProps {
  errorMessage?: string
  outerStyles?: Record<string, string>
}

export default class InputError extends Block {
  static className = 'InputError';
  constructor(props: InputErrorProps) {
    super(props);
  }

  render() {
    return inputErrorTmpl();
  }
}

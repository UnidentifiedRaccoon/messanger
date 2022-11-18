import Block, { BaseProps } from '../../../../utils/Core/Block';

import inputErrorTmpl from './InputError.tmpl';

interface InputErrorProps {
  errorMessage?: string
  outerStyles?: Record<string, string>
}

export default class InputError extends Block<BaseProps> {
  static className = 'InputError';
  constructor(props: InputErrorProps) {
    super(props);
  }

  render() {
    return inputErrorTmpl();
  }
}

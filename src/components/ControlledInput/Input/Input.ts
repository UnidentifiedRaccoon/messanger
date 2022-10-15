import Block from 'utils/Block';

import inputTmpl from './Input.tmpl';

interface InputProps {
  placeholder: string
  name: string
  value: string
  type?: 'text' | 'password' | 'email' | 'phone' | 'search'
  outerStyles?: Record<string, string>
  readonly?: boolean
  onInput?: () => void
  onFocus?: () => void
  onBlur?: () => void
}

export default class Input extends Block {
  static className = 'Input';
  constructor({
    onInput, onFocus, onBlur, type, ...props
  }: InputProps) {
    super({
      props,
      type: type || 'text',
      events: {
        input: onInput,
        focus: onFocus,
        blur: onBlur,
      },
    });
  }

  render() {
    return inputTmpl(this.props.readonly);
  }
}

import Block, { BaseProps } from '../../../../utils/Core/Block';

import inputTmpl from './Input.tmpl';

interface InputProps {
  placeholder: string
  name: string
  defaultValue?: string
  type?: 'text' | 'password' | 'email' | 'phone' | 'search'
  outerStyles?: Record<string, string>
  readonly?: boolean
  onInput?: (e: InputEvent) => void
  onFocus?: (e: FocusEvent) => void
  onBlur?: (e: Event) => void
}

export default class Input extends Block<BaseProps> {
  static className = 'Input';
  constructor({
    onInput, onFocus, onBlur, type, ...props
  }: InputProps) {
    super({
      ...props,
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

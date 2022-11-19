import Block, { BaseProps, Events } from '../../../../utils/Core/Block';

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
    const events: Events = {};
    if (onInput) events.input = onInput;
    if (onFocus) events.focus = onFocus;
    if (onBlur) events.blur = onBlur;
    super({
      ...props,
      type: type || 'text',
      events,
    });
  }

  render() {
    return inputTmpl(this.props.readonly);
  }
}

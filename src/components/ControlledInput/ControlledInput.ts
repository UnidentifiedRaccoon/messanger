import Block from 'utils/Block';

import validate from '../../utils/validator';

import controlledInputTmpl from './ControlledInput.tmpl';
import * as defaultStyles from './Input.module.scss';
import * as profileStyles from './InputProfile.module.scss';

interface ControlledInputProps {
  name: string
  tooltip: string
  errorMessage?: string
  validateType?: string
  readonly?: string
  type?: 'text' | 'password' | 'email' | 'phone' | 'search'
  styleMode?: 'profile'
  outerStyles?: Record<string, string>
  onInput?: (e: Event, input: ControlledInput) => void
  onFocus?: (e: Event, input: ControlledInput) => void
}

export default class ControlledInput extends Block {
  static className = 'ControlledInput';
  getProps() { return this.props; }
  getRefs() { return this.refs; }
  constructor({
    onFocus, onInput, type, styleMode, ...props
  }: ControlledInputProps) {
    super({
      ...props,
      onFocus: (e: Event) => {
        if (this.props.readonly === 'true') {
          e.preventDefault();
          return;
        }
        if (onFocus) {
          onFocus(e, this);
        }
      },
      onInput: (e: Event) => {
        if (onInput) {
          onInput(e, this);
        }
      },
      onBlur: (e: Event) => {
        e.preventDefault();
        if (this.props.readonly === 'true') {
          return;
        }
        const input = this.refs.input.getContent() as HTMLInputElement;
        const errorMessage = validate({
          type: this.props.validateType,
          value: input.value,
        });
        this.setProps({
          errorMessage,
        });
      },
      type: type || 'text',
      styles: styleMode === 'profile' ? profileStyles : defaultStyles,
    });
  }

  protected componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (oldProps.errorMessage !== newProps.errorMessage) {
      this.refs.error.setProps({
        errorMessage: newProps.errorMessage,
      });
      return false;
    }
    return super.componentDidUpdate(oldProps, newProps);
  }

  render() {
    return controlledInputTmpl();
  }
}

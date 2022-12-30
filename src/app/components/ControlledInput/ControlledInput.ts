import Block, { BaseProps } from '../../../utils/Core/Block';

import validate from '../../../utils/Form/validator';

import controlledInputTmpl from './ControlledInput.tmpl';
import defaultStyles from './Input.module.scss';
import profileStyles from './InputProfile.module.scss';

type ControlledInputProps = {
  name: string
  tooltip: string
  placeholder?: string
  defaultValue? : string
  errorMessage?: string
  validateType?: string
  readonly?: string
  type?: 'text' | 'password' | 'email' | 'phone' | 'search'
  styleMode?: 'profile'
  outerStyles?: Record<string, string>
  onInput?: (name: string, value: string, errorMessage: string) => void
  onFocus?: (name: string, value: string, errorMessage: string) => void
};

export default class ControlledInput extends Block<BaseProps> {
  static className = 'ControlledInput';
  getProps() { return this.props; }
  getRefs() { return this.refs; }
  constructor({
    onFocus, onInput, type, styleMode, placeholder, tooltip, ...props
  }: ControlledInputProps) {
    super({
      ...props,
      tooltip,
      placeholder: placeholder || tooltip,
      type: type || 'text',
      styles: styleMode === 'profile' ? profileStyles : defaultStyles,
      onFocus: (e: Event) => {
        e.preventDefault();
        const field = this.refs.input.getContent() as HTMLInputElement;
        const fieldType = this.props.validateType;
        const errorMessage = validate({
          type: fieldType,
          value: field.value,
        });
        this.setProps({
          errorMessage,
        });
        if (onFocus) {
          onFocus(this.props.name, field.value, errorMessage);
        }
      },
      onInput: (e: Event) => {
        e.preventDefault();
        const field = this.refs.input.getContent() as HTMLInputElement;
        const fieldType = this.props.validateType;
        const errorMessage = validate({
          type: fieldType,
          value: field.value,
        });
        this.setProps({
          errorMessage,
        });
        if (onInput) {
          onInput(this.props.name, field.value, errorMessage);
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

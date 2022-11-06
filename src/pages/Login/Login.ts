import Block from '../../utils/Core/Block';

import { PreparedFormData } from '../../typings/commonTypes';

import ControlledInput from '../../components/ControlledInput';

import validate from '../../utils/Form/validator';

import staticData from './Login.ru.json';
import loginTmpl from './Login.tmpl';
import * as styles from './Login.module.scss';

export default class Login extends Block {
  private errors: Map<string, ControlledInput>;
  constructor(rawProps: any) {
    super({
      ...rawProps,
      staticData,
      styles,
      onFocus: (e: Event, input: ControlledInput) => {
        e.preventDefault();
        const inputEl = input.getRefs().input.getContent() as HTMLInputElement;
        const errorMessage = validate({
          type: input.getProps().validateType,
          value: inputEl.value,
        });
        input.setProps({
          errorMessage,
        });
        if (errorMessage) {
          this.errors.set(input.id, input);
        }
      },
      onInput: (e: Event, input: ControlledInput) => {
        e.preventDefault();
        input.setProps({
          errorMessage: '',
        });
        this.errors.delete(input.id);
      },
      onSubmit: (data: PreparedFormData) => {
        if (this.errors.size === 0) {
          console.log(data);
        }
      },
    });
    this.errors = new Map();
  }

  render() {
    return loginTmpl();
  }
}

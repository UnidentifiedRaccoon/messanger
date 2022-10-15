import Block from 'utils/Block';

import ControlledInput from '../../components/ControlledInput';

import validate from '../../utils/validator';

import { PreparedFormData } from '../../typings/commonTypes';

import staticData from './SignIn.ru.json';
import signInTmpl from './SignIn.tmpl';
import * as styles from './SignIn.module.scss';

export default class SignIn extends Block {
  private errors: Map<string, ControlledInput>;
  constructor(rawProps: any) {
    super({
      ...rawProps,
      staticData,
      styles,
      onFocus: (e: Event, input: ControlledInput) => {
        e.preventDefault();
        const inputEl = input.getContent() as HTMLInputElement;
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
    return signInTmpl();
  }
}

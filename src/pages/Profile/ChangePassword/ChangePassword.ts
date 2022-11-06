import * as styles from '../Profile.module.scss';

import ControlledInput from '../../../components/ControlledInput';
import { PreparedFormData } from '../../../typings/commonTypes';

import Block from '../../../utils/Core/Block';

import validate from '../../../utils/Form/validator';

import changePasswordTmpl from './ChangePassword.tmpl';
import staticData from './ChangePassword.ru.json';

export default class ChangePassword extends Block {
  private errors: Map<string, ControlledInput>;
  constructor(rawProps: any) {
    super({
      ...rawProps,
      styles,
      staticData,
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
    return changePasswordTmpl();
  }
}

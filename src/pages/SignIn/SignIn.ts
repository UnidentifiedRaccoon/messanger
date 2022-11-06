import Block from '../../utils/Core/Block';

import { PreparedFormData, PreparedFormErrors } from '../../typings/commonTypes';

import staticData from './SignIn.ru.json';
import signInTmpl from './SignIn.tmpl';
import * as styles from './SignIn.module.scss';

export default class SignIn extends Block {
  private errors: PreparedFormErrors;
  constructor(rawProps: any) {
    super({
      ...rawProps,
      staticData,
      styles,
      onFocus: (name: string, _: string, errorMessage: string) => {
        if (errorMessage) {
          this.errors.set(name, errorMessage);
        }
      },
      onInput: (name: string) => {
        this.errors.delete(name);
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

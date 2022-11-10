import { Routes } from 'utils/Router/Routes';

import Block from '../../../utils/Core/Block';

import { PreparedFormData, PreparedFormErrors } from '../../../typings/commonTypes';

import PathRouter from '../../../utils/Router/PathRouter';

import staticData from './SignUp.ru.json';
import signUpTmpl from './SignUp.tmpl';
import * as styles from './SignUp.module.scss';

export default class SignUp extends Block {
  private errors: PreparedFormErrors;
  constructor(rawProps: any) {
    super({
      ...rawProps,
      staticData,
      styles,
      formSubmitError: '',
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
      onMoveToLogin: () => {
        PathRouter.go(Routes.Login.path);
      },
    });
    this.errors = new Map();
  }

  render() {
    return signUpTmpl();
  }
}

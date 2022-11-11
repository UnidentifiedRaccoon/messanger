import Block from '../../../utils/Core/Block';

import { PreparedFormData, PreparedFormErrors } from '../../../typings/commonTypes';

import PathRouter from '../../../utils/Router/PathRouter';

import { Routes } from '../../../utils/Router/Routes';

import staticData from './Login.ru.json';
import loginTmpl from './Login.tmpl';
import * as styles from './Login.module.scss';

export default class Login extends Block {
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
      onMoveToSignIn: () => {
        PathRouter.go(Routes.SignUp.path);
      },
    });
    this.errors = new Map();
  }

  render() {
    return loginTmpl();
  }
}
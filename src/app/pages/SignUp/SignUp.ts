import { Routes } from 'utils/Router/Routes';

import Block from '../../../utils/Core/Block';

import { PreparedFormErrors } from '../../../typings/commonTypes';

import PathRouter from '../../../utils/Router/PathRouter';

import AuthController from '../../../utils/Api/Auth/AuthController';

import { SignupForm } from '../../../utils/Api/Auth/Types';

import informer from '../../../utils/Core/informer';

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
      onSubmit: async (data: SignupForm) => {
        if (this.errors.size === 0) {
          try {
            const response = await AuthController.signup(data);
            console.log(response);
          } catch (err: any) {
            informer(err.message);
          }
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
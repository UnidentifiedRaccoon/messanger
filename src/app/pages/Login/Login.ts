import Block from '../../../utils/Core/Block';

import { PreparedFormErrors } from '../../../typings/commonTypes';

import PathRouter from '../../../utils/Router/PathRouter';

import { Routes } from '../../../utils/Router/Routes';

import informer from '../../../utils/Core/informer';

import { LoginForm } from '../../../utils/Api/Auth/Types';

import { Thunks } from '../../../utils/Store/Store';

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
      onSubmit: async (data: LoginForm) => {
        if (this.errors.size === 0) {
          try {
            await Thunks.login(data);
            PathRouter.go(Routes.Workspace.path);
          } catch (err: any) {
            informer(err.message);
          }
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

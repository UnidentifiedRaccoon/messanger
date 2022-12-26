import { Routes } from '../../../utils/Router/Routes';

import PathRouter from '../../../utils/Router/PathRouter';
import { SignupForm } from '../../../utils/Api/Auth/Types';
import Block, { BaseProps } from '../../../utils/Core/Block';

import { PreparedFormErrors } from '../../../typings/commonTypes';
import informer from '../../../utils/Core/informer';

import { Thunks } from '../../../utils/Store/Store';

import staticData from './SignUp.ru.json';
import signUpTmpl from './SignUp.tmpl';
import styles from './SignUp.module.scss';

class SignUp extends Block<BaseProps> {
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
      onInput: (name: string, _: string, errorMessage: string) => {
        if (errorMessage) {
          this.errors.set(name, errorMessage);
        } else {
          this.errors.delete(name);
        }
      },
      onSubmit: async (data: SignupForm) => {
        if (this.errors.size === 0) {
          try {
            await Thunks.signUp(data);
            PathRouter.go(Routes.Workspace.path);
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

export default SignUp;

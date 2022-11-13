import * as styles from '../Profile.module.scss';
import { PreparedFormErrors } from '../../../../typings/commonTypes';

import Block from '../../../../utils/Core/Block';

import PathRouter from '../../../../utils/Router/PathRouter';

import { Passwords, User } from '../../../../utils/Api/User/Types';

import { withUser } from '../../../../utils/Store/connect';

import { Thunks } from '../../../../utils/Store/Store';
import { Routes } from '../../../../utils/Router/Routes';
import informer from '../../../../utils/Core/informer';

import staticData from './ChangePassword.ru.json';
import changePasswordTmpl from './ChangePassword.tmpl';

type ChangePasswordProps = {
  user: User
};

class ChangePassword extends Block {
  private errors: PreparedFormErrors;
  constructor(rawProps: ChangePasswordProps) {
    super({
      ...rawProps,
      styles,
      staticData,
      formSubmitError: '',
      onFocus: (name: string, _: string, errorMessage: string) => {
        if (errorMessage) {
          this.errors.set(name, errorMessage);
        }
      },
      onInput: (name: string) => {
        this.errors.delete(name);
      },
      onSubmit: async (data: Passwords) => {
        if (this.errors.size === 0) {
          try {
            await Thunks.changePassword(data);
            PathRouter.go(Routes.Profile.path);
          } catch (err: any) {
            informer(err.message);
          }
        }
      },
      onMoveToBack: () => {
        PathRouter.back();
      },
    });
    this.errors = new Map();
  }

  render() {
    return changePasswordTmpl();
  }
}

export default withUser(ChangePassword);

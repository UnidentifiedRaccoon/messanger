import * as styles from '../Profile.module.scss';
import { PreparedFormErrors } from '../../../../typings/commonTypes';

import Block from '../../../../utils/Core/Block';

import PathRouter from '../../../../utils/Router/PathRouter';

import { withUser } from '../../../../utils/Store/connect';

import { User } from '../../../../utils/Api/User/Types';

import { Thunks } from '../../../../utils/Store/Store';
import { Routes } from '../../../../utils/Router/Routes';
import informer from '../../../../utils/Core/informer';

import staticData from './ChangeInfo.ru.json';
import changeInfoTmpl from './ChangeInfo.tmpl';

type ChangeInfoProps = {
  user: User
};

class ChangeInfo extends Block {
  private errors: PreparedFormErrors;
  constructor(rawProps: ChangeInfoProps) {
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
      onSubmit: async (data: Partial<User>) => {
        if (this.errors.size === 0) {
          try {
            await Thunks.changeInfo(data);
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
    return changeInfoTmpl();
  }
}

export default withUser(ChangeInfo);

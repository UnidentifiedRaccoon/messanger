import Block, { BaseProps } from '../../../utils/Core/Block';

import PathRouter from '../../../utils/Router/PathRouter';

import { Routes } from '../../../utils/Router/Routes';

import { Thunks } from '../../../utils/Store/Store';

import { User } from '../../../utils/Api/User/Types';

import { withUser } from '../../../utils/Store/connect';

import informer from '../../../utils/Core/informer';

import staticData from './Profile.ru.json';
import profileTmpl from './Profile.tmpl';
import * as styles from './Profile.module.scss';

type ProfileProps = {
  user: User
};

class Profile extends Block<BaseProps> {
  constructor(rawProps: ProfileProps) {
    super({
      ...rawProps,
      staticData,
      styles,
      onMoveToBack: () => {
        PathRouter.back();
      },
      onLoadAvatar: async (formData: FormData) => {
        try {
          await Thunks.changeAvatar(formData);
        } catch (e: any) {
          informer(e.message);
        }
      },
      onMoveToChangePassword: () => {
        PathRouter.go(Routes.ChangePassword.path);
      },
      onMoveToChangeInfo: () => {
        PathRouter.go(Routes.ChangeInfo.path);
      },
      onExit: async () => {
        try {
          await Thunks.logout();
          PathRouter.go(Routes.Login.path);
        } catch (e: any) {
          informer(e.message);
        }
      },
    });
  }

  render() {
    return profileTmpl();
  }
}

export default withUser(Profile);

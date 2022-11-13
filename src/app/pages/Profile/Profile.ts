import Block from '../../../utils/Core/Block';

import PathRouter from '../../../utils/Router/PathRouter';

import { Routes } from '../../../utils/Router/Routes';

import { Thunks } from '../../../utils/Store/Store';

import staticData from './Profile.ru.json';
import profileTmpl from './Profile.tmpl';
import * as styles from './Profile.module.scss';

export default class Profile extends Block {
  constructor(rawProps: any) {
    super({
      ...rawProps,
      staticData,
      styles,
      onMoveToBack: () => {
        PathRouter.back();
      },
      onMoveToChangePassword: () => {
        PathRouter.go(Routes.ChangePassword.path);
      },
      onMoveToChangeInfo: () => {
        PathRouter.go(Routes.ChangeInfo.path);
      },
      onExit: async () => {
        await Thunks.logout();
        PathRouter.go(Routes.Login.path);
      },
    });
  }

  render() {
    return profileTmpl();
  }
}

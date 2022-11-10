import Block from '../../../utils/Core/Block';

import PathRouter from '../../../utils/Router/PathRouter';

import { Routes } from '../../../utils/Router/Routes';

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
      onExit: () => {
        PathRouter.go(Routes.Login.path);
      },
    });
  }

  render() {
    return profileTmpl();
  }
}

import Block from 'utils/Block';

import styles from '../Profile.module.scss';

import staticData from './ChangePassword.ru.json';
import changePasswordTmpl from './ChangePassword.tmpl';

export default class ChangePassword extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, styles, staticData });
  }

  render() {
    return changePasswordTmpl();
  }
}

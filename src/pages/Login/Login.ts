import Block from 'utils/Block';

import staticData from './Login.ru.json';
import loginTmpl from './Login.tmpl';
import styles from './Login.module.scss';

export default class Login extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, staticData, styles });
  }

  render() {
    return loginTmpl();
  }
}

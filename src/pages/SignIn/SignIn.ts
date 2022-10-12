import Block from 'utils/Block';

import staticData from './SignIn.ru.json';
import signInTmpl from './SignIn.tmpl';
import styles from './SignIn.module.scss';

export default class SignIn extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, staticData, styles });
  }

  render() {
    return signInTmpl();
  }
}

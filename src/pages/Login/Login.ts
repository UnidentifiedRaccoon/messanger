import Block from 'utils/Block';

import staticData from './Login.ru.json';
import loginTmpl from './Login.tmpl';
import * as styles from './Login.module.scss';

export default class Login extends Block {
  constructor(rawProps: any) {
    super({
      ...rawProps,
      staticData,
      styles,
      onSubmit: (data: any) => {
        console.log(data);
      },

    });
  }

  render() {
    return loginTmpl();
  }
}

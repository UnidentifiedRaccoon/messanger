import Block from 'utils/Block';

import * as styles from '../Profile.module.scss';

import staticData from './ChangeInfo.ru.json';
import changeInfoTmpl from './ChangeInfo.tmpl';

export default class ChangeInfo extends Block {
  constructor(rawProps: any) {
    super({
      ...rawProps,
      styles,
      staticData,
      onSubmit: (data: any) => {
        console.log(data);
      },
    });
  }

  render() {
    return changeInfoTmpl();
  }
}

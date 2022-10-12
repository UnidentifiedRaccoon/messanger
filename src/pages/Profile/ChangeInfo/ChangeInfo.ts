import Block from 'utils/Block';

import styles from '../Profile.module.scss';

import staticData from './ChangeInfo.ru.json';
import changeInfoTmpl from './ChangeInfo.tmpl';

export default class ChangeInfo extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, styles, staticData });
  }

  render() {
    return changeInfoTmpl();
  }
}

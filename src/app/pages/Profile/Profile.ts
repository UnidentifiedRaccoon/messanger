import Block from '../../../utils/Core/Block';

import staticData from './Profile.ru.json';
import profileTmpl from './Profile.tmpl';
import * as styles from './Profile.module.scss';

export default class Profile extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, staticData, styles });
  }

  render() {
    return profileTmpl();
  }
}

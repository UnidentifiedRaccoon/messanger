import Block from 'utils/Block';

import iconProfileTmpl from './IconProfile.tmpl';
import profileIcon from './profile-icon.svg';
import * as styles from './IconProfile.module.scss';

export default class IconProfile extends Block {
  constructor(rawProps: any) {
    super({
      ...rawProps,
      styles,
      icon: rawProps.icon || profileIcon,
    });
  }

  render() {
    return iconProfileTmpl();
  }
}

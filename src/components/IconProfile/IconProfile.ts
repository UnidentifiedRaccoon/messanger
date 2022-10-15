import Block from 'utils/Block';

import iconProfileTmpl from './IconProfile.tmpl';
import profileIcon from './profile-icon.svg';
import * as styles from './IconProfile.module.scss';

type IconProfileProps = {
  outerStyles?: Record<string, string>
  icon?: string
};

export default class IconProfile extends Block {
  static className = 'IconProfile';
  constructor({ icon, ...props }: IconProfileProps) {
    super({
      ...props,
      styles,
      icon: icon || profileIcon,
    });
  }

  render() {
    return iconProfileTmpl();
  }
}

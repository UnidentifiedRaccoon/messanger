import Block, { BaseProps } from '../../../utils/Core/Block';

import iconProfileTmpl from './IconProfile.tmpl';
import profileIcon from './profile-icon.svg';
import * as styles from './IconProfile.module.scss';

type IconProfileProps = {
  outerStyles?: Record<string, string>
  icon?: string
};

export default class IconProfile extends Block<BaseProps> {
  static className = 'IconProfile';
  constructor({ icon, ...props }: IconProfileProps) {
    super({
      ...props,
      styles,
      icon: icon ? `https://ya-praktikum.tech/api/v2/resources${icon}` : profileIcon,
    });
  }

  render() {
    return iconProfileTmpl();
  }
}

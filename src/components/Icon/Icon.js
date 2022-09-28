import Handlebars from 'handlebars/dist/handlebars.runtime';

import styles from './Icon.module.scss';
import template from './Icon.hbs';
import profileIcon from './profile-icon.svg';

Handlebars.registerPartial('Icon', (...props) => {
  const icon = props[0].type === 'profile' ? profileIcon : '';
  return template({ ...props[0], styles, icon }, props[1]);
});

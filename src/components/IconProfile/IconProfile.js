import Handlebars from 'handlebars/dist/handlebars.runtime';

import styles from './IconProfile.module.scss';
import template from './IconProfile.hbs';
import profileIcon from './profile-icon.svg';

// Есть компонент иконок IconInline. Но инлайнить png фото профиля не получится, да и незачем.
// Поэтому для иконок профиля заведем отдельный компонент IconProfile
Handlebars.registerPartial('IconProfile', (...props) => {
  const icon = props[0].icon || profileIcon;
  return template({ ...props[0], styles, icon }, props[1]);
});

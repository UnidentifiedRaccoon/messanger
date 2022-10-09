import Handlebars from 'handlebars/dist/handlebars.runtime';
// eslint-disable-next-line import/no-unresolved
import cross from 'bundle-text:./cross.svg';

import * as styles from './Cross.module.scss';
import template from './Cross.hbs';

Handlebars.registerPartial('Cross', (...props) => {
  let typeMode;
  switch (props[0].typeMode) {
    case 'delete': typeMode = styles.delete; break;
    case 'add': typeMode = styles.add; break;
    default: typeMode = '';
  }
  return template({
    ...props[0], styles, cross, typeMode,
  }, props[1]);
});

import Handlebars from 'handlebars/dist/handlebars.runtime';
// eslint-disable-next-line import/no-unresolved
import arrow from 'bundle-text:./arrow.svg';

import * as styles from './Arrow.module.scss';
import template from './Arrow.hbs';

Handlebars.registerPartial('Arrow', (...props) => {
  let dirMode;
  switch (props[0].dirMode) {
    case 'top': dirMode = styles.top; break;
    case 'right': dirMode = styles.right; break;
    case 'bottom': dirMode = styles.bottom; break;
    default: dirMode = '';
  }
  return template({
    ...props[0], styles, arrow, dirMode,
  }, props[1]);
});

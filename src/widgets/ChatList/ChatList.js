import Handlebars from 'handlebars/dist/handlebars.runtime';
// eslint-disable-next-line import/no-unresolved
import next from 'bundle-text:./next.svg';

import template from './ChatList.hbs';
import * as styles from './ChatList.module.scss';

Handlebars.registerPartial(
  'ChatList',
  (...props) => template({
    ...props[0], styles: { ...props[0].styles, ...styles }, next,
  }, props[1]),
);

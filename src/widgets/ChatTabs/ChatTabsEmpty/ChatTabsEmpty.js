import Handlebars from 'handlebars/dist/handlebars.runtime';

import template from './ChatTabsEmpty.hbs';
import styles from './ChatTabsEmpty.module.scss';

Handlebars.registerPartial(
  'ChatTabsEmpty',
  (...props) => template({
    ...props[0], styles: { ...props[0].styles, ...styles },
  }, props[1]),
);

import Handlebars from 'handlebars/dist/handlebars.runtime';

import template from './ChatTabs.hbs';
import styles from './ChatTabs.module.scss';

Handlebars.registerPartial(
  'ChatTabs',
  (...props) => template({
    ...props[0], styles: { ...props[0].styles, ...styles },
  }, props[1]),
);

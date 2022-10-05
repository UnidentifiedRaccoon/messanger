import Handlebars from 'handlebars/dist/handlebars.runtime';

import template from './ChatEmpty.hbs';
import * as styles from './ChatEmpty.module.scss';

Handlebars.registerPartial(
  'ChatEmpty',
  (...props) => template({
    ...props[0], styles: { ...props[0].styles, ...styles },
  }, props[1]),
);

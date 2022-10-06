import Handlebars from 'handlebars/dist/handlebars.runtime';

import * as styles from './Search.module.scss';
import template from './Search.hbs';

Handlebars.registerPartial(
  'Search',
  (...props) => template({ ...props[0], styles: { ...props[0].styles, ...styles } }, props[1]),
);

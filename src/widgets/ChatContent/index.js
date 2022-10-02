import Handlebars from 'handlebars/dist/handlebars.runtime';

import template from './ChatContent.hbs';
import styles from './ChatContent.module.scss';

Handlebars.registerPartial(
  'ChatContent',
  (...props) => template({ ...props[0], styles: { ...props[0].styles, ...styles } }, props[1]),
);

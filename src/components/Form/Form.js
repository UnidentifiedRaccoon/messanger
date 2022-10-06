import Handlebars from 'handlebars/dist/handlebars.runtime';

import * as styles from './Form.module.scss';
import template from './Form.hbs';

Handlebars.registerPartial(
  'Form',
  (...props) => template({ ...props[0], styles: { ...props[0].styles, ...styles } }, props[1]),
);

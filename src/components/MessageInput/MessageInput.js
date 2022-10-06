import Handlebars from 'handlebars/dist/handlebars.runtime';

import * as styles from './MessageInput.module.scss';
import template from './MessageInput.hbs';

Handlebars.registerPartial(
  'MessageInput',
  (...props) => template({ ...props[0], styles: { ...props[0].styles, ...styles } }, props[1]),
);

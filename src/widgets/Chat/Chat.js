import Handlebars from 'handlebars/dist/handlebars.runtime';

import template from './Chat.hbs';
import * as styles from './Chat.module.scss';

Handlebars.registerPartial(
  'Chat',
  (...props) => template({
    ...props[0], styles: { ...props[0].styles, ...styles },
  }, props[1]),
);

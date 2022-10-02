import Handlebars from 'handlebars/dist/handlebars.runtime';
// eslint-disable-next-line import/no-unresolved
import attachment from 'bundle-text:./attachment.svg';

import template from './ChatMessageBar.hbs';
import styles from './ChatMessageBar.module.scss';

Handlebars.registerPartial(
  'ChatMessageBar',
  (...props) => template({ ...props[0], styles: { ...props[0].styles, ...styles }, attachment }, props[1]),
);

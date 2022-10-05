import Handlebars from 'handlebars/dist/handlebars.runtime';

import template from './Overlay.hbs';
import styles from './Overlay.module.scss';
import '../../../components';

Handlebars.registerPartial(
  'Overlay',
  (...props) => template({ ...props[0], styles: { ...props[0].styles, ...styles } }, props[1]),
);

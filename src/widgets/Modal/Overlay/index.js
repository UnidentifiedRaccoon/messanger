import Handlebars from 'handlebars/dist/handlebars.runtime';

import template from './index.hbs';
import styles from './index.module.scss';
import '../../../components';

Handlebars.registerPartial(
  'overlay',
  (...props) => template({ ...props[0], styles: { ...props[0].styles, ...styles } }, props[1]),
);

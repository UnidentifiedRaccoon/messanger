import Handlebars from 'handlebars/dist/handlebars.runtime';

import styles from './Button.module.scss';
import template from './Button.hbs';

Handlebars.registerPartial('Button', (...props) => template({ ...props[0], styles }, props[1]));

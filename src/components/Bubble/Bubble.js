import Handlebars from 'handlebars/dist/handlebars.runtime';

import styles from './Bubble.module.scss';
import template from './Bubble.hbs';

Handlebars.registerPartial('Bubble', (...props) => template({ ...props[0], styles }, props[1]));

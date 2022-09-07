import Handlebars from 'handlebars/dist/handlebars.runtime';

import styles from './index.module.scss';
import template from './index.hbs';

Handlebars.registerPartial('Link', (...props) => template({ ...props[0], styles }, props[1]));

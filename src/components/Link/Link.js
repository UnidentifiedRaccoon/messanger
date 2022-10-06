import Handlebars from 'handlebars/dist/handlebars.runtime';

import * as styles from './Link.module.scss';
import template from './Link.hbs';

Handlebars.registerPartial('Link', (...props) => template({ ...props[0], styles }, props[1]));

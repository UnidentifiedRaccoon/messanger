import Handlebars from 'handlebars/dist/handlebars.runtime';

import template from './Message.hbs';
import styles from './Message.module.scss';

Handlebars.registerPartial('Message', (...props) => template({ ...props[0], styles }, props[1]));

import Handlebars from 'handlebars/dist/handlebars.runtime';

import template from './CriticalSiteError.hbs';
import * as styles from './CriticalSiteError.module.scss';
import '../../components';

Handlebars.registerPartial(
  'CriticalSiteError',
  (...props) => template({
    ...props[0], styles: { ...props[0].styles, ...styles },
  }, props[1]),
);

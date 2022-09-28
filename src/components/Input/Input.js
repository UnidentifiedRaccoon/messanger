import Handlebars from 'handlebars/dist/handlebars.runtime';

import defaultStyles from './Input.module.scss';
import profileStyles from './Input--profile.module.scss';
import template from './Input.hbs';

Handlebars.registerPartial(
  'Input',
  (...props) => {
    const styles = props[0].styleMode === 'profile' ? profileStyles : defaultStyles;
    return template({ ...props[0], styles: { ...props[0].styles, ...styles } }, props[1]);
  },
);

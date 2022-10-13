import Block from 'utils/Block';

import inputTmpl from './Input.tmpl';
import * as defaultStyles from './Input.module.scss';
import * as profileStyles from './InputProfile.module.scss';

export default class Input extends Block {
  static className = 'Input';
  constructor(rawProps: any) {
    super({
      ...rawProps,
      type: rawProps.type || 'text',
      styles: rawProps.styleMode === 'profile' ? profileStyles : defaultStyles,
    });
  }

  render() {
    return inputTmpl();
  }
}

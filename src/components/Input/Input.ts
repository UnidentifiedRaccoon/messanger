import Block from 'utils/Block';

import inputTmpl from './Input.tmpl';
import * as defaultStyles from './Input.module.scss';
import * as profileStyles from './InputProfile.module.scss';

export default class Input extends Block {
  constructor(rawProps: any) {
    super({
      ...rawProps,
      styles: rawProps.styleMode === 'profile' ? profileStyles : defaultStyles,
    });
  }

  render() {
    return inputTmpl();
  }
}

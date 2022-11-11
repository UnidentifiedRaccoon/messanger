import error from 'bundle-text:./Error.svg';

import Block from '../../../../utils/Core/Block';

import errorTmpl from './Error.tmpl';
import * as styles from './Error.module.scss';

export default class Error extends Block {
  static className = 'Error';
  constructor() {
    super({
      styles,
      error,
    });
  }

  render() {
    return errorTmpl();
  }
}

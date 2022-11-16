import error from 'bundle-text:./Error.svg';

import Block, { BaseProps } from '../../../../utils/Core/Block';

import errorTmpl from './Error.tmpl';
import * as styles from './Error.module.scss';

export default class Error extends Block<BaseProps> {
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

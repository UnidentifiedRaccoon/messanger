import Block, { BaseProps } from '../../../../utils/Core/Block';

import error from './Error.inline.svg';

import errorTmpl from './Error.tmpl';
import styles from './Error.module.scss';

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

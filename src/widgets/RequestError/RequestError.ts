import Block from 'utils/Block';

import requestErrorTmpl from './RequestError.tmpl';
import * as styles from './RequestError.module.scss';

export default class RequestError extends Block {
  static className = 'RequestError';
  constructor(rawProps: any) {
    super({ ...rawProps, styles });
  }

  render() {
    return requestErrorTmpl();
  }
}

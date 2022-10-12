import Block from 'utils/Block';

import requestErrorTmpl from './RequestError.tmpl';
import styles from './RequestError.module.scss';

export default class RequestError extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, styles });
  }

  render() {
    return requestErrorTmpl();
  }
}

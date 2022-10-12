import Block from 'utils/Block';

import messageTmpl from './Message.tmpl';
import * as styles from './Message.module.scss';

export default class Message extends Block {
  constructor(rawProps: any) {
    super({
      ...rawProps,
      styles,
    });
  }

  render() {
    return messageTmpl();
  }
}

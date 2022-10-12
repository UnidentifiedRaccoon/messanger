import Block from 'utils/Block';

import messageInputTmpl from './MessageInput.tmpl';
import * as styles from './MessageInput.module.scss';

export default class MessageInput extends Block {
  constructor(rawProps: any) {
    super({
      ...rawProps,
      styles,
    });
  }

  render() {
    return messageInputTmpl();
  }
}

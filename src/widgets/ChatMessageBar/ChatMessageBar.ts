import attachment from 'bundle-text:./attachment.svg';

import Block from 'utils/Block';

import chatMessageBarTmpl from './ChatMessageBar.tmpl';
import styles from './ChatMessageBar.module.scss';

export default class ChatMessageBar extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, styles, attachment });
  }

  render() {
    return chatMessageBarTmpl();
  }
}

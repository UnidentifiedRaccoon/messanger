import next from 'bundle-text:./next.svg';

import Block from 'utils/Block';

import chatListTmpl from './ChatList.tmpl';
import styles from './ChatList.module.scss';

export default class ChatList extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, styles, next });
  }

  render() {
    return chatListTmpl();
  }
}

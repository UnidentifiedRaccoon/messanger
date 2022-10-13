import next from 'bundle-text:./next.svg';

import Block from 'utils/Block';

import chatListTmpl from './ChatList.tmpl';
import * as styles from './ChatList.module.scss';

export default class ChatList extends Block {
  static className = 'ChatList';
  constructor(rawProps: any) {
    super({ ...rawProps, styles, next });
  }

  render() {
    return chatListTmpl();
  }
}

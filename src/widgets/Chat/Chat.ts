import Block from 'utils/Block';

import chatTmpl from './Chat.tmpl';
import * as styles from './Chat.module.scss';

export default class Chat extends Block {
  static className = 'Chat';
  constructor(rawProps: any) {
    super({ ...rawProps, styles });
  }

  render() {
    return chatTmpl();
  }
}

import Block from 'utils/Block';

import chatTmpl from './Chat.tmpl';
import styles from './Chat.module.scss';

export default class Chat extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, styles });
  }

  render() {
    return chatTmpl();
  }
}

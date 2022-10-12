import Block from 'utils/Block';

import chatTabsTmpl from './ChatTabs.tmpl';
import styles from './ChatTabs.module.scss';

export default class ChatTabs extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, styles });
  }

  render() {
    return chatTabsTmpl();
  }
}

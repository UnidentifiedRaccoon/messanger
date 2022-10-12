import Block from 'utils/Block';

import chatTabsEmpteTmpl from './ChatTabsEmpty.tmpl';
import styles from './ChatTabsEmpty.module.scss';

export default class ChatTabsEmpty extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, styles });
  }

  render() {
    return chatTabsEmpteTmpl();
  }
}

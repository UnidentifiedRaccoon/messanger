import Block from 'utils/Block';

import chatTabsEmpteTmpl from './ChatTabsEmpty.tmpl';
import * as styles from './ChatTabsEmpty.module.scss';

export default class ChatTabsEmpty extends Block {
  static className = 'ChatTabsEmpty';
  constructor(rawProps: any) {
    super({ ...rawProps, styles });
  }

  render() {
    return chatTabsEmpteTmpl();
  }
}

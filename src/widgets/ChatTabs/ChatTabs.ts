import Block from 'utils/Block';

import chatTabsTmpl from './ChatTabs.tmpl';
import * as styles from './ChatTabs.module.scss';

export default class ChatTabs extends Block {
  static className = 'ChatTabs';
  constructor(rawProps: any) {
    super({ ...rawProps, styles });
  }

  render() {
    return chatTabsTmpl();
  }
}

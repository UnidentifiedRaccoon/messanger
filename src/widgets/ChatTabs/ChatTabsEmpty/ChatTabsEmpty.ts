import Block from 'utils/Block';

import chatTabsEmptyTmpl from './ChatTabsEmpty.tmpl';
import * as styles from './ChatTabsEmpty.module.scss';

interface ChatTabsEmptyProps {
  text?: string
}

export default class ChatTabsEmpty extends Block {
  static className = 'ChatTabsEmpty';
  constructor(props: ChatTabsEmptyProps) {
    super({ ...props, styles });
  }

  render() {
    return chatTabsEmptyTmpl();
  }
}

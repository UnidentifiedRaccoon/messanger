import Block, { BaseProps } from '../../../../utils/Core/Block';

import chatTabsEmptyTmpl from './ChatTabsEmpty.tmpl';
import styles from './ChatTabsEmpty.module.scss';

interface ChatTabsEmptyProps {
  text?: string
}

export default class ChatTabsEmpty extends Block<BaseProps> {
  static className = 'ChatTabsEmpty';
  constructor(props: ChatTabsEmptyProps) {
    super({ ...props, styles });
  }

  render() {
    return chatTabsEmptyTmpl();
  }
}

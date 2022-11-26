import Block, { BaseProps } from '../../../utils/Core/Block';

import chatTabsTmpl from './ChatTabs.tmpl';
import styles from './ChatTabs.module.scss';

interface ChatTabsProps {
  data: ChatTabs[]
}

export default class ChatTabs extends Block<BaseProps> {
  static className = 'ChatTabs';
  constructor(rawProps: ChatTabsProps) {
    super({ ...rawProps, styles });
  }

  render() {
    return chatTabsTmpl();
  }
}

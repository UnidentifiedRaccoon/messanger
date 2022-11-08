import Block from '../../../utils/Core/Block';

import { RandomChatTabData } from '../../mocks/chats';

import chatTabsTmpl from './ChatTabs.tmpl';
import * as styles from './ChatTabs.module.scss';

interface ChatTabsProps {
  data: RandomChatTabData
}

export default class ChatTabs extends Block {
  static className = 'ChatTabs';
  constructor(props: ChatTabsProps) {
    super({ ...props, styles });
  }

  render() {
    return chatTabsTmpl();
  }
}

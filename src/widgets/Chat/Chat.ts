import Block from '../../utils/Core/Block';

import ChatData from '../../mocks/chat';

import chatTmpl from './Chat.tmpl';
import * as styles from './Chat.module.scss';

interface ChatProps {
  staticData: Record<string, any>
  data?: ChatData
}

export default class Chat extends Block {
  static className = 'Chat';
  constructor(props: ChatProps) {
    super({ ...props, styles });
  }

  render() {
    return chatTmpl();
  }
}

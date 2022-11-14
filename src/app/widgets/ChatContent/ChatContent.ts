import Block from '../../../utils/Core/Block';

import ChatData from '../../mocks/chat';

import chatContentTmpl from './ChatContent.tmpl';
import * as styles from './ChatContent.module.scss';

interface ChatContentProps {
  staticData: Record<string, any>
  data: ChatData
}

export default class ChatContent extends Block {
  static className = 'ChatContent';
  constructor(props: ChatContentProps) {
    // const { messages } = props.data;
    // const days = separateByDays(messages); // чтобы старые были вверху, новые внизу
    // const formatTime = formatToMessageTime(days);
    // const bubble = props.staticData.newSeparator;
    // const withNewBubble = addNewBubble(formatTime, bubble); // не нашел другого способа пробросить i11y текст
    super({ ...props, styles });
  }

  render() {
    return chatContentTmpl();
  }
}

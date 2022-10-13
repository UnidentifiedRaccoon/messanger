import Block from 'utils/Block';

import { addNewBubble, separateByDays } from '../../utils/commonFn/chatContentPrepare';

import { formatToMessageTime } from '../../utils/commonFn/time';

import chatContentTmpl from './ChatContent.tmpl';
import * as styles from './ChatContent.module.scss';

export default class ChatContent extends Block {
  static className = 'ChatContent';
  constructor(rawProps: any) {
    const { messages } = rawProps.data;
    const days = separateByDays(messages).reverse(); // чтобы старые были вверху, новые внизу
    const formatTime = formatToMessageTime(days);
    const bubble = rawProps.staticData.newSeparator;
    const withNewBubble = addNewBubble(formatTime, bubble); // не нашел другого способа пробросить i11y текст
    super({ ...rawProps, styles, days: withNewBubble });
  }

  render() {
    return chatContentTmpl();
  }
}

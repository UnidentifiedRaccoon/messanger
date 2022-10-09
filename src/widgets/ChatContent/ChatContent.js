import Handlebars from 'handlebars/dist/handlebars.runtime';

import { addNewBubble, separateByDays } from '../../utils/commonFn/chatContentPrepare';

import { formatToMessageTime } from '../../utils/commonFn/time';

import template from './ChatContent.hbs';
import * as styles from './ChatContent.module.scss';

Handlebars.registerPartial(
  'ChatContent',
  (...props) => {
    const { messages } = props[0].data;
    const days = separateByDays(messages).reverse(); // чтобы старые были вверху, новые внизу
    const formatTime = formatToMessageTime(days);
    const bubble = props[0].staticData.newSeparator;
    const withNewBubble = addNewBubble(formatTime, bubble); // не нашел другого способа пробросить i11y текст
    return template({ ...props[0], styles: { ...props[0].styles, ...styles }, days: withNewBubble }, props[1]);
  },
);

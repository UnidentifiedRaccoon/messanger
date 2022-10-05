import Handlebars from 'handlebars/dist/handlebars.runtime';

import { timeFormat } from '../../utils/time';

import template from './ChatContent.hbs';
import * as styles from './ChatContent.module.scss';

const separate = (separateIn, message) => {
  if (message.unread) separateIn.unread.push(message);
  else separateIn.read.push(message);
};

const separateByDays = (arr) => {
  const days = [];
  // console.log(arr);
  for (let i = 0; i < arr.length;) {
    const day = {
      day: timeFormat(arr[i].time, false),
      read: [],
      unread: [],
    };
    const firstMessageOfDay = arr[i]; i += 1;
    separate(day, firstMessageOfDay);

    while (i < arr.length && firstMessageOfDay.time.toDateString() === arr[i].time.toDateString()) {
      separate(day, arr[i]);
      i += 1;
    }
    days.push(day);
  }
  return days;
};
//
const formatHHMM = (arr) => arr.map((item) => {
  if (!arr.length) return [];
  const date = new Date(item.time);
  return { ...item, time: new Intl.DateTimeFormat('ru', { hour: '2-digit', minute: '2-digit' }).format(date) };
});

const formatToMessageTime = (arr) => arr.map((day) => (
  { ...day, unread: formatHHMM(day.unread), read: formatHHMM(day.read) }
));

const addNewBubble = (arr, text) => {
  const withNewBubble = arr.slice();
  const firstDayWithUnread = arr.findIndex((dayObj) => dayObj.unread.length > 0);
  if (firstDayWithUnread !== -1) withNewBubble[firstDayWithUnread].new = text;
  return withNewBubble;
};

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

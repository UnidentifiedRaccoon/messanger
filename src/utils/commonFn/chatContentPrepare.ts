import { Message } from '../../typings/mockTypes';

import { DayFormattedMessages, DayMessages } from '../../typings/utilityTypes';

import { timeFormat } from './time';

export const separate = (separateIn: DayMessages, message: Message) => {
  if (message.unread) separateIn.unread.push(message);
  else separateIn.read.push(message);
};

export const separateByDays = (arr: Message[]): DayMessages[] => {
  const days: DayMessages[] = [];
  for (let i = 0; i < arr.length;) {
    const day: DayMessages = {
      day: {
        datetime: arr[i].time,
        formatted: timeFormat(arr[i].time, false),
      },
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

export const addNewBubble = (arr: DayFormattedMessages[], text: string) => {
  const withNewBubble = arr.slice();
  const firstDayWithUnread = arr.findIndex((dayObj) => dayObj.unread.length > 0);
  if (firstDayWithUnread !== -1) withNewBubble[firstDayWithUnread].new = text;
  return withNewBubble;
};

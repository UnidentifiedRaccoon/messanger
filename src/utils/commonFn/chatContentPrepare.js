import { timeFormat } from './time';

export const separate = (separateIn, message) => {
  if (message.unread) separateIn.unread.push(message);
  else separateIn.read.push(message);
};

export const separateByDays = (arr) => {
  const days = [];
  // console.log(arr);
  for (let i = 0; i < arr.length;) {
    const day = {
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

export const addNewBubble = (arr, text) => {
  const withNewBubble = arr.slice();
  const firstDayWithUnread = arr.findIndex((dayObj) => dayObj.unread.length > 0);
  if (firstDayWithUnread !== -1) withNewBubble[firstDayWithUnread].new = text;
  return withNewBubble;
};

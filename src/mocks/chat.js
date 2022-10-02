import { secInDay } from '../utils/time';

import { icons, phrases, titles } from './const_chat';
import { randomN } from './utils';

const getRandomItem = (arr) => arr[randomN(arr.length)];
const getRandomItems = (arr, n = arr.length) => {
  let i = 0;
  let tmpArr = arr;
  const randomArr = [];
  while (i < n) {
    const randomItem = getRandomItem(tmpArr);
    randomArr.push(randomItem);
    tmpArr = tmpArr.filter((item) => item !== randomItem);
    i += 1;
  }
  return randomArr;
};

const getRandomTime = () => {
  const flag = Math.random() > 0.5;
  const day = flag ? secInDay : -secInDay;
  return new Date(Date.now() + randomN(day));
};

const addMessageTime = (arr) => {
  const time = getRandomTime();
  return arr.map((text, i) => ({
    text,
    time: new Date(time + randomN(i * secInDay)),
  }));
};

export default class ChatData {
  constructor(i) {
    const unreadAmount = randomN(phrases.length);
    const readAmount = phrases.length - unreadAmount;
    this.id = `chat-list-item-${i}`;
    this.icon = getRandomItem(icons);
    this.title = getRandomItem(titles);
    this.unreadedMessages = addMessageTime(getRandomItems(phrases, unreadAmount));
    this.unread = this.unreadedMessages.length;
    this.readedMessages = addMessageTime(getRandomItems(phrases, readAmount));
  }
}

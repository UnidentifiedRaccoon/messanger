import { nanoid } from 'nanoid';

import { secInDay } from '../utils/time';

import { messagesTimeSort } from '../utils/sort';

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

const getRandomTime = () => new Date(Date.now() - randomN(secInDay));

const addMessageTime = (arr) => {
  const time = getRandomTime();
  return arr.map((text, i) => ({
    text,
    time: new Date(time.valueOf() - randomN(i * secInDay)),
  }));
};

const AddMessageNanoid = (arr) => arr.map((item) => ({ ...item, nanoid: nanoid() }));

const addUnreadMessage = (messages, unreadAmount) => messages.map((m, i) => ({ ...m, unread: unreadAmount > i }));

export default class ChatData {
  constructor(i) {
    const unreadAmount = randomN(phrases.length);
    const messages = AddMessageNanoid(
      messagesTimeSort(
        addMessageTime(
          getRandomItems(phrases),
        ),
      ),
    );
    this.id = `chat-list-item-${i}`;
    this.icon = getRandomItem(icons);
    this.title = getRandomItem(titles);
    this.messages = addUnreadMessage(messages, unreadAmount);
  }
}

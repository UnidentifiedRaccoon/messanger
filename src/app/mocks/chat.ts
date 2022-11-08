import { nanoid } from 'nanoid';

import { Message } from 'typings/mockTypes';

import { SEC_IN_DAY } from '../../utils/common/time';

import { messagesTimeSort } from '../../utils/common/sort';

import { icons, phrases, titles } from './const_chat';
import { randomN } from './utils';

const getRandomItem = <T>(arr: T[]) => arr[randomN(arr.length)];
const getRandomItems = <T>(arr: T[], n = arr.length) => {
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

const getRandomTime = () => new Date(Date.now() - randomN(SEC_IN_DAY));

const createMessages = (arr: string[]): Message[] => {
  const time = getRandomTime();
  return arr.map((text: string, i: number) => ({
    text,
    time: new Date(time.valueOf() - randomN(i * SEC_IN_DAY)),
    nanoid: nanoid(),
    unread: false,
  }));
};

const addUnreadMessage = (messages: Message[], unreadAmount: number) => messages.map(
  (m, i) => ({ ...m, unread: unreadAmount > i }),
);

export default class ChatData {
  id: string;
  icon: string;
  title: string;
  messages: Message[];

  constructor(i: number) {
    this.id = `chat-list-item-${i}`;
    this.icon = getRandomItem(icons);
    this.title = getRandomItem(titles);

    // создадим сообщения, отсортируем по дате, потом сделаем N первых не прочтенными
    const messages = messagesTimeSort(
      createMessages(
        getRandomItems(phrases),
      ),
    );
    const unreadAmount = randomN(phrases.length);
    this.messages = addUnreadMessage(messages, unreadAmount);
  }
}

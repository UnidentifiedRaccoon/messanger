// eslint-disable-next-line max-classes-per-file
import { preGeneratedChatsData } from './const_chat';
import generatedChatsData from './generator';

export class ChatTabData {
  constructor(i) {
    this.id = preGeneratedChatsData[i].id;
    this.icon = preGeneratedChatsData[i].icon;
    this.title = preGeneratedChatsData[i].title;
    this.unread = preGeneratedChatsData[i].unread;
    this.lastMessage = this.unread === 0
      ? preGeneratedChatsData[i].readedMessages[preGeneratedChatsData[i].readedMessages.length - 1]
      : preGeneratedChatsData[i].unreadedMessages[this.unread - 1];
  }
}

export class RandomChatTabData {
  constructor(i) {
    this.id = generatedChatsData[i].id;
    this.icon = generatedChatsData[i].icon;
    this.title = generatedChatsData[i].title;
    this.unread = generatedChatsData[i].unread;
    this.lastMessage = this.unread === 0
      ? generatedChatsData[i].readedMessages[generatedChatsData[i].readedMessages.length - 1]
      : generatedChatsData[i].unreadedMessages[this.unread - 1];
  }
}

export const generateChatListData = (amount = 0, random = false) => (
  [...new Array(Math.min(preGeneratedChatsData.length, amount))]
    .map((item, i) => (random ? new RandomChatTabData(i) : new ChatTabData(i))));

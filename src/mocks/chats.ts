import generatedChatsData from './generator';
import { ChatTabData, Message } from './mockTypes';

export class RandomChatTabData implements ChatTabData {
  id: string;
  icon: string;
  title: string;
  lastMessage: Message;
  unread: any;
  constructor(i: number) {
    this.id = generatedChatsData[i].id;
    this.icon = generatedChatsData[i].icon;
    this.title = generatedChatsData[i].title;
    // eslint-disable-next-line prefer-destructuring
    this.lastMessage = generatedChatsData[i].messages[0];
    this.unread = generatedChatsData[i].messages.reduce((acc, m) => (m.unread ? acc + 1 : acc), 0);
  }
}

export const generateChatListData = (amount = 0) => (
  [...new Array(Math.min(10, amount))]
    .map((_, i) => new RandomChatTabData(i)));

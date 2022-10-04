// eslint-disable-next-line max-classes-per-file
import generatedChatsData from './generator';

export class RandomChatTabData {
  constructor(i) {
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
    .map((item, i) => new RandomChatTabData(i)));

import { ChatTabData, Message } from '../../typings/mockTypes';

const chatsTimeSort = (arr: ChatTabData[]) => arr.sort(
  (a, b) => new Date(b.lastMessage.time).getTime() - new Date(a.lastMessage.time).getTime(),
);

const messagesTimeSort = (arr: Message[]) => arr.sort(
  (a: Message, b: Message) => new Date(b.time).getTime() - new Date(a.time).getTime(),
);
export { chatsTimeSort, messagesTimeSort };

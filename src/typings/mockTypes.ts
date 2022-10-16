export type Message = {
  text: string
  time: Date
  nanoid: string
  unread: boolean
};

export interface ChatTabData {
  id: string;
  icon: string;
  title: string;
  lastMessage: Message;
  unread: number;
}

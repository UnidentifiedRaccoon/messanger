import { Message } from './mockTypes';

export type DayMessages = {
  day: {
    datetime: Date,
    formatted: string,
  },
  read: Message[]
  unread: Message[]
  new?: string
};

export type ChatMessage = {
  text: string
  time: {
    datetime: string,
    formatted: string,
  },
  nanoid: string
  unread: boolean
};

export type DayFormattedMessages = {
  day: {
    datetime: Date,
    formatted: string,
  },
  read: ChatMessage[]
  unread: ChatMessage[]
  new?: string
};

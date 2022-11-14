import { User, UserDTO } from '../User/Types';

export type ChatTab = {
  id: number,
  title: string,
  avatar: string,
  unreadCount: number,
  createdBy: number,
  lastMessage: {
    user?: Partial<User>,
    time?: string,
    content?: string
  }
};

export type ChatTabDTO = {
  id: number,
  title: string,
  avatar: string,
  unread_count: number,
  created_by: number,
  last_message: {
    user?: Partial<UserDTO>,
    time?: string,
    content?: string
  }
};

export type ChatsQuery = {
  offset?: number,
  limit?: number,
  title?: string
};

export type ChatSettings = {
  title: string
};

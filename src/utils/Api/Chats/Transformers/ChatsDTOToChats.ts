import { ChatTab, ChatTabDTO } from '../Types';

const ChatsDTOToChats = (chats: ChatTabDTO[]): ChatTab[] => chats.map((chat) => {
  const base: ChatTab = {
    id: chat.id,
    title: chat.title,
    avatar: chat.avatar,
    unreadCount: chat.unread_count,
    lastMessage: chat.last_message,
    createdBy: chat.created_by,
  };

  if (chat.last_message && chat.last_message.user) {
    base.lastMessage = {
      user: {
        name: chat.last_message.user.first_name,
        surname: chat.last_message.user.second_name,
        avatar: chat.last_message.user.avatar,
        email: chat.last_message.user.email,
        login: chat.last_message.user.login,
        phone: chat.last_message.user.phone,
      },
      time: chat.last_message.time,
      content: chat.last_message.content,
    };
  }
  return base;
});

export default ChatsDTOToChats;

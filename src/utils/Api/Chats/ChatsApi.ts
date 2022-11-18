import queryStringify from '../../common/queryStringify';

import YandexTransport from '../transports';

import Headers from '../headers';

import { ChatSettings, ChatsQuery } from './Types';

const transport = new YandexTransport('/chats');

class ChatsApi {
  getChats(queryData: ChatsQuery) {
    return transport.get('', {
      data: queryStringify(queryData),
    });
  }

  addChat(settings: ChatSettings) {
    return transport.post('', {
      data: JSON.stringify(settings),
      headers: { ...Headers.json },
    });
  }

  addUserToChat(chatId: number, userId: number) {
    return transport.put('/users', {
      data: JSON.stringify({
        users: [
          userId,
        ],
        chatId,
      }),
      headers: { ...Headers.json },
    });
  }

  deleteChat(id: number) {
    return transport.delete('', {
      data: JSON.stringify({ chatId: id }),
      headers: { ...Headers.json },
    });
  }

  getChatToken(id: number) {
    return transport.post(`/token/${id}`, {});
  }

  getChatUnreadAmount(id: number) {
    return transport.get(`/new/${id}`, {});
  }
}

export default new ChatsApi();

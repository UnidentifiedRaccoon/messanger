import HTTPTransport from '../../Core/HTTPTransport';
import queryStringify from '../../common/queryStringify';

import { ChatSettings, ChatsQuery } from './Types';

const transport = new HTTPTransport('https://ya-praktikum.tech/api/v2/chats');

class ChatsApi {
  getChats(queryData: ChatsQuery) {
    return transport.get('', { data: queryStringify(queryData) });
  }

  addChat(settings: ChatSettings) {
    return transport.post('', {
      data: JSON.stringify(settings),
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
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
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
    });
  }

  deleteChat(id: number) {
    return transport.delete('', {
      data: JSON.stringify({ chatId: id }),
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
    });
  }

  getChatToken(id: number) {
    return transport.post(`/token${id}`, {});
  }
}

export default new ChatsApi();

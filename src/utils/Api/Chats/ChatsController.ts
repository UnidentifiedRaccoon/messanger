import ChatsApi from './ChatsApi';
import ChatsDTOToChats from './Transformers/ChatsDTOToChats';
import { ChatSettings, ChatsQuery } from './Types';

class ChatsController {
  async getChats(queryData: ChatsQuery) {
    const data = await ChatsApi.getChats(queryData);
    const response = JSON.parse(data.response);
    if (response.reason) throw new Error(response.reason);
    if (data.status >= 200 && data.status < 400) {
      return ChatsDTOToChats(response);
    }
    throw new Error(`Непредвиденная ошибка, код ошибки${data.status}. Обратитесь в службу поддержки`);
  }

  async addChat(settings: ChatSettings) {
    const data = await ChatsApi.addChat(settings);
    if (data.status >= 200 && data.status < 400) return;
    const response = JSON.parse(data.response);
    if (response.reason) throw new Error(response.reason);
    throw new Error(`Непредвиденная ошибка, код ошибки${data.status}. Обратитесь в службу поддержки`);
  }

  async addUserToChat(chatId: number, userId: number) {
    const data = await ChatsApi.addUserToChat(chatId, userId);
    if (data.status >= 200 && data.status < 400) return;
    const response = JSON.parse(data.response);
    if (response.reason) throw new Error(response.reason);
    throw new Error(`Непредвиденная ошибка, код ошибки${data.status}. Обратитесь в службу поддержки`);
  }

  async deleteChat(id: number) {
    const data = await ChatsApi.deleteChat(id);
    if (data.status >= 200 && data.status < 400) return;
    throw new Error(`Непредвиденная ошибка, код ошибки${data.status}. Обратитесь в службу поддержки`);
  }

  async getChatToken(chatId: number) {
    const data = await ChatsApi.getChatToken(chatId);
    const response = JSON.parse(data.response);
    if (response.reason) throw new Error(response.reason);
    if (data.status >= 200 && data.status < 400) {
      return response;
    }
    throw new Error(`Непредвиденная ошибка, код ошибки${data.status}. Обратитесь в службу поддержки`);
  }

  async getChatUnreadAmount(chatId: number) {
    const data = await ChatsApi.getChatUnreadAmount(chatId);
    const response = JSON.parse(data.response);
    if (data.status >= 200 && data.status < 400) {
      return response.unread_count;
    }
    throw new Error(`Непредвиденная ошибка, код ошибки${data.status}. Обратитесь в службу поддержки`);
  }
}

export default new ChatsController();

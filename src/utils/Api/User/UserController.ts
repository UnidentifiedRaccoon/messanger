import UserApi from './UserApi';

class UserController {
  async getUser() {
    const data = await UserApi.getUser();
    const response = JSON.parse(data.response);
    if (response.reason) throw new Error(response.reason);
    if (data.status >= 200 && data.status < 400) {
      return response;
    }
    throw new Error(`Непредвиденная ошибка, код ошибки${data.status}. Обратитесь в службу поддержки`);
  }
}

export default new UserController();

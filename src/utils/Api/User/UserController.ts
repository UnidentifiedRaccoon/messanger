import UserApi from './UserApi';
import { Passwords, User } from './Types';
import UserToUserDTO from './Transformers/UserToUserDTO';
import UserDTOToUser from './Transformers/UserDTOToUser';

class UserController {
  async getCurrentUser(): Promise<User> {
    const data = await UserApi.getCurrentUser();
    const response = JSON.parse(data.response);
    if (response.reason) throw new Error(response.reason);
    if (data.status >= 200 && data.status < 400) {
      return UserDTOToUser(response);
    }
    throw new Error(`Непредвиденная ошибка, код ошибки${data.status}. Обратитесь в службу поддержки`);
  }

  async getUser(id: number): Promise<User> {
    const data = await UserApi.getUser(id);
    const response = JSON.parse(data.response);
    if (data.status >= 200 && data.status < 400) {
      return UserDTOToUser(response);
    }
    if (data.status >= 400 && data.status < 500) {
      throw new Error('Запрашиваемый пользователь отсутствует');
    }
    throw new Error(`Непредвиденная ошибка, код ошибки${data.status}. Обратитесь в службу поддержки`);
  }

  async changeInfo(user: User) {
    const data = await UserApi.changeInfo(UserToUserDTO(user));

    const response = JSON.parse(data.response);
    if (response.reason) throw new Error(response.reason);
    if (data.status >= 200 && data.status < 400) return UserDTOToUser(response);
    throw new Error(`Непредвиденная ошибка, код ошибки${data.status}. Обратитесь в службу поддержки`);
  }

  async changeAvatar(formData: FormData) {
    const data = await UserApi.changeAvatar(formData);
    const response = JSON.parse(data.response);
    if (response.reason) throw new Error(response.reason);
    if (data.status >= 200 && data.status < 400) return UserDTOToUser(response);
    throw new Error(`Непредвиденная ошибка, код ошибки${data.status}. Обратитесь в службу поддержки`);
  }

  async changePassword(passwords: Passwords) {
    if (passwords.newPassword !== passwords.newPasswordRepeat) {
      throw new Error('Введенные пароли не совпадают');
    }
    const data = await UserApi.changePassword(passwords);
    if (data.status >= 200 && data.status < 400) return;

    const response = JSON.parse(data.response);
    if (response.reason) throw new Error(response.reason);
    throw new Error(`Непредвиденная ошибка, код ошибки${data.status}. Обратитесь в службу поддержки`);
  }
}

export default new UserController();

import HTTPTransport from '../../Core/HTTPTransport';

import { Passwords, UserDTO } from './Types';

const transportAuth = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth');
const transportChange = new HTTPTransport('https://ya-praktikum.tech/api/v2/user');

class UserApi {
  getUser() {
    return transportAuth.get('/user', {});
  }

  changeInfo(data: UserDTO) {
    return transportChange.put('/profile', {
      data: JSON.stringify({
        first_name: data.first_name,
        second_name: data.second_name,
        display_name: data.display_name,
        login: data.login,
        email: data.email,
        phone: data.phone,
        avatar: data.avatar,
      }),
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
    });
  }

  changeAvatar(data: FormData) {
    return transportChange.put('/profile/avatar', {
      data,
    });
  }

  changePassword(data: Partial<Passwords>) {
    return transportChange.put('/password', {
      data: JSON.stringify({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      }),
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
    });
  }
}

export default new UserApi();

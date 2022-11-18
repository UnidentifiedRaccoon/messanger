import YandexTransport from '../transports';

import Headers from '../headers';

import { Passwords, UserDTO } from './Types';

const transportAuth = new YandexTransport('/auth');
const transportChange = new YandexTransport('/user');

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
      headers: { ...Headers.json },
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
      headers: { ...Headers.json },
    });
  }
}

export default new UserApi();

import YandexTransport from '../transports';

import Headers from '../headers';

import { LoginFormDTO, SignupFormDTO } from './Types';

const transport = new YandexTransport('/auth');

class AuthApi {
  signup(data: SignupFormDTO) {
    return transport.post('/signup', {
      data: JSON.stringify(data),
      headers: { ...Headers.json },
    });
  }

  login(data: LoginFormDTO) {
    return transport.post('/signin', {
      data: JSON.stringify(data),
      headers: { ...Headers.json },
    });
  }

  logout() {
    return transport.post('/logout', {
      headers: { ...Headers.json },
    });
  }
}

export default new AuthApi();

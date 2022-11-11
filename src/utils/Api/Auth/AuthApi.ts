import HTTPTransport from '../../Core/HTTPTransport';

import { SignupFormDTO } from './Types';

const transport = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth');

class AuthApi {
  signup(data: SignupFormDTO) {
    return transport.post('/signup', {
      data: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
    });
  }
}

export default new AuthApi();

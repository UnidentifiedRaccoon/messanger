import HTTPTransport from '../../Core/HTTPTransport';

const transport = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth');

class UserApi {
  getUser() {
    return transport.get('/user', {});
  }
}

export default new UserApi();

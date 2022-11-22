import AuthController from '../utils/Api/Auth/AuthController';

import server, { userData } from './Api/apiMock';

describe('Api basic use cases', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Should login', async () => {
    await AuthController.login({
      login: userData.login,
      password: userData.password,
    });
  });

  it('Should logout', async () => {
    await AuthController.logout();
  });
});

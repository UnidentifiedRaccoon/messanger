import { setupServer } from 'msw/node';
import { rest } from 'msw';

const pathToYandexApi = 'https://ya-praktikum.tech/api/v2';

export const userData = {
  avatar: '/d66cf98f-05dc-49ba-8d2b-c1db0c5888c3/761d694b-39b5-4dee-ab15-78a2bf05461d_12.png',
  displayName: 'Джон дое',
  email: 'johndoe2@johndoe2.johndoe2',
  firstName: 'Джон',
  id: 3094,
  login: 'johndoe2',
  phone: '89137909090',
  secondName: 'Дое',
  password: '1234',
};

const handlers = [
  rest.post(`${pathToYandexApi}/auth/signin`, async (req, res, ctx) => {
    const request = await req.json();
    if (request.login === userData.login && request.password === userData.password) {
      return res(ctx.status(200));
    }
    return res(ctx.status(400));
  }),

  rest.post(`${pathToYandexApi}/auth/logout`, (_, res, ctx) => res(ctx.status(200))),
];

const server = setupServer(...handlers);
export default server;

import { screen } from '@testing-library/dom';

import { Routes } from '../utils/Router/Routes';
import PathRouter from '../utils/Router/PathRouter';

import initApp from './initApp';

describe('Router basic use cases', () => {
  beforeAll(() => {
    initApp();
  });

  afterEach(() => {
    PathRouter.go('/');
  });

  it('Should change location pathname', () => {
    const pathBefore = window.location.pathname;

    PathRouter.go(Routes.SignUp.path);
    const pathAfter = window.location.pathname;

    expect(pathBefore).toEqual('/');
    expect(pathAfter).toEqual(Routes.SignUp.path);
  });

  it('Should render page', () => {
    PathRouter.go(Routes.SignUp.path);

    expect(screen.getByRole('heading', {
      name: /регистрация/i,
    })).toBeInTheDocument();
  });
});

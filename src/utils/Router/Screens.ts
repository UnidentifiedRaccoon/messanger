import ClientError from '../../app/pages/ClientError';
import ServerError from '../../app/pages/ServerError';
import Login from '../../app/pages/Login';
import SignUp from '../../app/pages/SignUp';
import Workspace from '../../app/pages/Workspace';
import Profile from '../../app/pages/Profile';
import ChangeInfo from '../../app/pages/Profile/ChangeInfo';
import ChangePassword from '../../app/pages/Profile/ChangePassword';
import Block from '../Core/Block';

import { merge } from '../common/objectHelpers';

import { Routes, ScreenNames } from './Routes';

export type Screen = { path: string, Block: typeof Block, shouldAuthorized: boolean };

export const Screens: Record<ScreenNames, Screen> = merge({
  ClientError: {
    Block: ClientError,
    shouldAuthorized: false,
  },
  ServerError: {
    Block: ServerError,
    shouldAuthorized: false,
  },
  Login: {
    Block: Login,
    shouldAuthorized: false,
  },
  SignUp: {
    Block: SignUp,
    shouldAuthorized: false,
  },
  Workspace: {
    Block: Workspace,
    shouldAuthorized: true,
  },
  Profile: {
    Block: Profile,
    shouldAuthorized: true,
  },
  ChangeInfo: {
    Block: ChangeInfo,
    shouldAuthorized: true,
  },
  ChangePassword: {
    Block: ChangePassword,
    shouldAuthorized: true,
  },
}, Routes);

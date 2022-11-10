export type ScreenNames = 'ClientError'
| 'ServerError'
| 'Login'
| 'SignUp'
| 'Workspace'
| 'Profile'
| 'ChangeInfo'
| 'ChangePassword';

export const Routes: Record<ScreenNames, { path: string }> = {
  ClientError: {
    path: '*',
  },
  ServerError: {
    path: '/5xx',
  },
  Login: {
    path: '/',
  },
  SignUp: {
    path: '/signup',
  },
  Workspace: {
    path: '/workspace',
  },
  Profile: {
    path: '/profile',
  },
  ChangeInfo: {
    path: '/change_info',
  },
  ChangePassword: {
    path: '/change_password',
  },
};

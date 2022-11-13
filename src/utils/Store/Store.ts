import EventBus from '../Core/EventBus';
import {
  cloneDeep, exactEqual, merge, objectFromPath,
} from '../common/objectHelpers';
import UserController from '../Api/User/UserController';
import informer from '../Core/informer';
import { LoginForm } from '../Api/Auth/Types';
import AuthController from '../Api/Auth/AuthController';

export type StoreState = {
  user: Record<string, any> | null;
  chats: Record<string, any> | null;
  isLoading: boolean,
  authStatus: boolean,
};

export type AppState = {
  store: StoreState
};

type Action<State> = {
  path: string
  updateStateWith: Partial<State>
};

export class Store<State extends Record<string, any>> extends EventBus<typeof Store.EVENTS> {
  static EVENTS = {
    CHANGE: 'change',
  };

  private state: AppState;
  constructor(defaultState: AppState) {
    super();
    this.state = defaultState;
  }

  getState(): AppState {
    return this.state;
  }

  private set(nextState: Partial<State>) {
    const prevState = { ...this.state };
    this.state = merge(cloneDeep(prevState), nextState);
    this.emit(Store.EVENTS.CHANGE, prevState, this.state);
  }

  dispatch(action: Action<State> | Promise<Action<State>>): boolean | Promise<boolean> {
    // dispatch thunk
    if (action instanceof Promise) {
      // thunk вообще не обязательно диспатчить, тк они не работают
      // со стором напрямую, но я хочу иметь общий интерфейс
      return true;
    }

    // dispatch action
    if (!exactEqual(this.state, action.updateStateWith, action.path)) {
      this.set(action.updateStateWith);
      return true;
    }
    return false;
  }

  actionCreator(cb: (payload: any) => Action<State>): (payload: any) => Action<State> {
    return (payload: any) => cb(payload);
  }
}

const defaultState: AppState = {
  store: {
    user: null,
    chats: null,
    isLoading: true,
    authStatus: false,
  },
};

const store = new Store(defaultState);
export default store;

// Actions
// export const action = store.actionCreator((value) => {
//   const path = 'store.authStatus';
//   return {
//     path,
//     updateStateWith: objectFromPath(path, value),
//   };
// });
const setAuth = store.actionCreator((value) => {
  const path = 'store.authStatus';
  return {
    path,
    updateStateWith: objectFromPath(path, value),
  };
});

const setUser = store.actionCreator((user) => {
  let value = user;
  const path = 'store.user';
  if (!value || Object.keys(value).length === 0) {
    value = {};
    store.dispatch(setAuth(false));
  } else {
    store.dispatch(setAuth(true));
  }
  return {
    path,
    updateStateWith: objectFromPath(path, value),
  };
});

export const Actions = {
  setUser,
};

// Thunks
const loginThunk = async (data: LoginForm) => {
  await AuthController.login(data);
  const user = await UserController.getUser();
  localStorage.setItem('user', JSON.stringify(user));
  store.dispatch(Actions.setUser(user));
};

const revalidateUser = async () => {
  let user = JSON.parse(localStorage.getItem('user')!);
  store.dispatch(Actions.setUser(user));
  try {
    user = await UserController.getUser();
    localStorage.setItem('user', JSON.stringify(user));
    store.dispatch(Actions.setUser(user));
  } catch (err: any) {
    // Вот тут информер показывать не обязательно,
    informer(err.message);
  }
};

const logoutThunk = async () => {
  try {
    await AuthController.logout();
    localStorage.removeItem('user');
    store.dispatch(Actions.setUser(null));
  } catch (err: any) {
  // Вот тут информер показывать не обязательно,
    informer(err.message);
  }
};

export const Thunks = {
  login: loginThunk,
  logout: logoutThunk,
  revalidateUser,
};

// Selectors
export const selectorAuthStatus = () => store.getState().store.authStatus;

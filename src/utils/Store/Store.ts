import EventBus from '../Core/EventBus';
import {
  cloneDeep, exactEqual, merge, objectFromPath,
} from '../common/objectHelpers';
import UserController from '../Api/User/UserController';
import { LoginForm } from '../Api/Auth/Types';
import AuthController from '../Api/Auth/AuthController';
import { Passwords, User } from '../Api/User/Types';
import ChatsController from '../Api/Chats/ChatsController';
import { ChatSettings, ChatTab } from '../Api/Chats/Types';

export type StoreState = {
  user: Record<string, any> | null
  chats: Record<string, any> | null
  activeChat: Record<string, any> | null
  activeChatToken: string
  isLoading: boolean
  authStatus: boolean
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

  dispatch(action: Action<State>): boolean | Promise<boolean> {
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
    activeChat: null,
    isLoading: true,
    authStatus: false,
    activeChatToken: '',
  },
};

const store = new Store(defaultState);
export default store;

// Selectors
const selectorAuthStatus = () => store.getState().store.authStatus;
const selectorUser = () => store.getState().store.user;
const selectorChats = () => store.getState().store.chats;
const selectorActiveChat = () => store.getState().store.activeChat;
const selectorToken = () => store.getState().store.activeChat;

export const Selectors = {
  authStatus: selectorAuthStatus,
  user: selectorUser,
  token: selectorToken,
};

// Actions
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

const setChats = store.actionCreator((chats) => {
  const path = 'store.chats';
  return {
    path,
    updateStateWith: objectFromPath(path, chats),
  };
});

const setActiveChat = store.actionCreator((activeChat) => {
  const path = 'store.activeChat';
  return {
    path,
    updateStateWith: objectFromPath(path, activeChat),
  };
});

const setToken = store.actionCreator((token: string) => {
  const path = 'store.activeChatToken';
  return {
    path,
    updateStateWith: objectFromPath(path, token),
  };
});

export const Actions = {
  setUser,
  setChats,
  setActiveChat,
  setToken,
};

// Thunks
const loginThunk = async (data: LoginForm) => {
  try {
    await AuthController.login(data);
    const user = await UserController.getUser();
    localStorage.setItem('user', JSON.stringify(user));
    store.dispatch(Actions.setUser(user));
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const revalidateUser = async () => {
  try {
    let user = JSON.parse(localStorage.getItem('user')!);
    store.dispatch(Actions.setUser(user));
    user = await UserController.getUser();
    localStorage.setItem('user', JSON.stringify(user));
    store.dispatch(Actions.setUser(user));
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const logoutThunk = async () => {
  try {
    await AuthController.logout();
    localStorage.removeItem('user');
    store.dispatch(Actions.setUser(null));
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const changeInfo = async (data: Partial<User>) => {
  try {
    const storedUser = Selectors.user()!;
    const updatedUser = merge(cloneDeep(storedUser), data);
    const user = await UserController.changeInfo(updatedUser);
    localStorage.setItem('user', JSON.stringify(user));
    store.dispatch(Actions.setUser(user));
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const changeAvatar = async (formData: FormData) => {
  try {
    const user = await UserController.changeAvatar(formData);
    localStorage.setItem('user', JSON.stringify(user));
    store.dispatch(Actions.setUser(user));
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const changePassword = async (passwords: Passwords) => {
  try {
    await UserController.changePassword(passwords);
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const getChats = async () => {
  try {
    const chats = await ChatsController.getChats({ offset: 0 });
    store.dispatch(Actions.setChats(chats));
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const getChat = async (id: number) => {
  try {
    const chats = selectorChats();
    if (chats) {
      // Получить метаинформацию чата
      const activeChat = chats.find((chat: ChatTab) => chat.id === id);
      // Получить токен

      // Подключиться по wss

      // Выполнить диспатч, чтобы отобразить чат
      store.dispatch(setActiveChat(activeChat));
    }
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const addChat = async (data: ChatSettings) => {
  try {
    await ChatsController.addChat(data);
    getChats();
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const addUserToChat = async (userId: number) => {
  try {
    const activeChat = selectorActiveChat();
    if (activeChat) {
      await ChatsController.addUserToChat(activeChat.id, userId);
    } else {
      throw new Error('Добавления пользователя при не активном чате');
    }
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const deleteChat = async (id: number) => {
  try {
    store.dispatch(Actions.setActiveChat(null));
    await ChatsController.deleteChat(id);
    getChats();
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const getChatToken = async () => {
  try {
    const activeChat = selectorActiveChat();
    if (activeChat) {
      const token = await ChatsController.getChatToken(activeChat.id);
      store.dispatch(Actions.setToken(token));
    } else {
      throw new Error('Подключение к неактивному чату');
    }
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const Thunks = {
  login: loginThunk,
  logout: logoutThunk,
  revalidateUser,
  changeInfo,
  changeAvatar,
  changePassword,
  getChats,
  getChat,
  addChat,
  deleteChat,
  addUserToChat,
  getChatToken,
};

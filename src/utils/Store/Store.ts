import EventBus from '../Core/EventBus';
import {
  cloneDeep, exactEqual, merge, objectFromPath,
} from '../common/objectHelpers';
import AuthApi from '../Api/Auth/AuthApi';

type Action<State> = {
  path: string
  updateStateWith: Partial<State>
};

class Store<State extends Record<string, any>> extends EventBus<typeof Store.EVENTS> {
  static EVENTS = {
    CHANGE: 'change',
  };

  private state: Record<string, any>;
  constructor(defaultState: Record<string, any>) {
    super();
    this.state = defaultState;
  }

  getState() {
    return this.state;
  }

  private set(nextState: Partial<State>) {
    const prevState = { ...this.state };
    this.state = merge(cloneDeep(prevState), nextState);
    this.emit(Store.EVENTS.CHANGE, prevState, this.state);
  }

  dispatch(action: Action<State>): boolean {
    // setState if get new value
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

const defaultState = {
  store: {
    user: {},
    chats: {},
    signup: {},
  },
};
const store = new Store(defaultState);
export default store;

// Actions
// export const auth = store.actionCreator((payload) => {
//   const path = 'store.auth';
//   return {
//     path,
//     updateStateWith: objectFromPath(path, payload),
//   };
// });

export const signup = store.actionCreator(() => {
  const path = 'store.signup';
  const data = {
    email: 'yura.posledov@yandex.ru',
    first_name: 'Брий',
    login: 'Брий',
    password: '1234Qwerty',
    phone: '89895099343',
    second_name: 'Брий',
  };
  AuthApi.signup(data).then((response) => {
    console.log(response);
  });
  return {
    path,
    updateStateWith: objectFromPath(path, data),
  };
});

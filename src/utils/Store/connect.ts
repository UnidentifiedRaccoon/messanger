import { Indexed, isEqual } from '../common/objectHelpers';
import Block from '../Core/Block';

import store, { AppState, Store } from './Store';

export function connect(mapStateToProps: (state: Indexed) => Indexed) {
  return (Component: typeof Block) => class extends Component {
    private componentState: Indexed;
    constructor(props: any) {
      const state = mapStateToProps(store.getState());
      super({ ...props, ...state });
      this.componentState = state;
    }

    #onChangeUserCallback = (_: AppState, newState: AppState) => {
      // можем обращаться и к аргументам ф-ции
      const mappedNewState = mapStateToProps(newState);
      if (!isEqual(this.componentState, mappedNewState)) {
        this.setProps({ ...mappedNewState });
      }
      this.componentState = mappedNewState;
    };

    componentDidMount() {
      super.componentDidMount();
      store.on(Store.EVENTS.CHANGE, this.#onChangeUserCallback);
    }

    componentWillUnmount() {
      super.componentWillUnmount();
      store.off(Store.EVENTS.CHANGE, this.#onChangeUserCallback);
    }
  };
}

// MapStateToProps
// function mapUserToProps(state) {
//   return {
//     name: state.user.name,
//     avatar: state.user.avatar,
//   };
// }

export const withUser = connect((state) => ({ user: state.store.user }));
export const withChats = connect((state) => ({ chats: state.store.chats }));
export const withActiveChat = connect((state) => ({
  activeChat: state.store.activeChat,
}));
export const withMessagesSocketMeta = connect((state) => ({
  messagesSocketMeta: state.store.messagesSocket,
}));

import Block from '../../../utils/Core/Block';

import { withActiveChat } from '../../../utils/Store/connect';

import { Selectors, Thunks } from '../../../utils/Store/Store';
import { ChatTab } from '../../../utils/Api/Chats/Types';
import { Routes } from '../../../utils/Router/Routes';
import PathRouter from '../../../utils/Router/PathRouter';
import informer from '../../../utils/Core/informer';

import portal from '../../../utils/Core/portal';

import AddUserToChat from '../AddUserToChat/AddUserToChat';

import * as styles from './Chat.module.scss';
import chatTmpl from './Chat.tmpl';

type ChatProps = {
  staticData: Record<string, any>
  activeChat: ChatTab
};

class Chat extends Block {
  static className = 'Chat';
  constructor(props: ChatProps) {
    super({
      ...props,
      styles,
      onChatDelete: async () => {
        try {
          await Thunks.deleteChat(this.props.activeChat.id);
          PathRouter.go(Routes.Workspace.path);
        } catch (err: any) {
          informer(err.message);
        }
      },
      onAddUserToChat: async () => {
        portal(AddUserToChat, { staticData: props.staticData.addUserToChat });
      },
    });
  }

  render() {
    const isChatOwner = this.props.activeChat ? this.props.activeChat.createdBy === Selectors.user()!.id : false;
    return chatTmpl(isChatOwner);
  }
}

export default withActiveChat(Chat);

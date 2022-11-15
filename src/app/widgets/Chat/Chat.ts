import Block from '../../../utils/Core/Block';

import { withActiveChat, withMessagesSocketMeta } from '../../../utils/Store/connect';

import { Selectors, Thunks } from '../../../utils/Store/Store';
import { ChatTab } from '../../../utils/Api/Chats/Types';
import { Routes } from '../../../utils/Router/Routes';
import PathRouter from '../../../utils/Router/PathRouter';
import informer from '../../../utils/Core/informer';

import portal from '../../../utils/Core/portal';

import AddUserToChat from '../AddUserToChat/AddUserToChat';

import MessagesSocket from '../../../utils/Api/Messages/MessagesSocket';

import { isEqual } from '../../../utils/common/objectHelpers';

import { MessagePayload } from '../ChatMessageBar/ChatMessageBar';

import * as styles from './Chat.module.scss';
import chatTmpl from './Chat.tmpl';

type ChatProps = {
  staticData: Record<string, any>
  activeChat: ChatTab
  messagesSocketMeta: {
    userId: number,
    chatId: number,
    token: string,
    unread: number,
  }
};

class Chat extends Block {
  static className = 'Chat';
  private messagesSocket: MessagesSocket | null = null;
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
      onMessageSend: (chatMessage: MessagePayload) => {
        if (this.messagesSocket) {
          this.messagesSocket.sendMessage(chatMessage.message);
        }
      },
    });
  }

  protected componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (newProps.messagesSocketMeta === null && this.messagesSocket) {
      this.messagesSocket.close();
    } else if (!isEqual(oldProps.messagesSocketMeta, newProps.messagesSocketMeta)) {
      this.messagesSocket?.close();
      this.messagesSocket = new MessagesSocket(newProps.messagesSocketMeta);
      this.messagesSocket.onMessage((event: any) => {
        console.log(event);
      });
    }
    return super.componentDidUpdate(oldProps, newProps);
  }

  render() {
    const isChatOwner = this.props.activeChat ? this.props.activeChat.createdBy === Selectors.user()!.id : false;
    return chatTmpl(isChatOwner);
  }
}

export default withActiveChat(withMessagesSocketMeta(Chat));

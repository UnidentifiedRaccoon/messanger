import Block, { BaseProps } from '../../../utils/Core/Block';

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

import styles from './Chat.module.scss';
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

class Chat extends Block<BaseProps> {
  static className = 'Chat';
  private messagesSocket: MessagesSocket | null = null;
  constructor(props: ChatProps) {
    super({
      ...props,
      styles,
      onChatDelete: async () => {
        try {
          this.messagesSocket?.close();
          await Thunks.deleteChat();
          PathRouter.go(Routes.Workspace.path);
        } catch (err: any) {
          informer(err.message);
        }
      },
      onAddUserToChat: async () => {
        portal(AddUserToChat, { staticData: props.staticData.addUserToChat });
      },

      onLeaveUser: async () => {
        const user = Selectors.user();
        if (user) {
          try {
            await Thunks.removeUserFromChat(user.id);
            PathRouter.go(Routes.Workspace.path);
          } catch (err: any) {
            informer(err.message);
          }
        }
      },
      onExcludeUser: async () => {
      },
      onMessageSend: (chatMessage: MessagePayload) => {
        this.messagesSocket?.sendMessage(chatMessage.message);
      },
    });
  }

  protected componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (!isEqual(oldProps.messagesSocketMeta, newProps.messagesSocketMeta)) {
      this.messagesSocket?.close();
      this.messagesSocket = new MessagesSocket(newProps.messagesSocketMeta);
      this.messagesSocket.onMessage((event: any) => {
        let messages = event;
        if (!Array.isArray(event)) {
          messages = [event];
        } else {
          messages = event.reverse();
        }

        messages.forEach((message: Record<string, any>) => {
          this.refs.content.setProps({
            message: {
              insert: Array.isArray(event) ? 'prepend' : 'append',
              type: message.type,
              content: message.content,
              time: new Date(message.time) || new Date(),
              id: message.id || -1,
              userId: message.user_id || +messages.content,
              new: !message.is_read,
            },
          });
        });
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

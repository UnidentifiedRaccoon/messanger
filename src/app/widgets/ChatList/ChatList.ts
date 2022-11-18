import next from 'bundle-text:./next.svg';

import Block, { BaseProps } from '../../../utils/Core/Block';

import PathRouter from '../../../utils/Router/PathRouter';

import { Routes } from '../../../utils/Router/Routes';

import portal from '../../../utils/Core/portal';

import AddChat from '../AddChat/AddChat';

import { ChatTab } from '../../../utils/Api/Chats/Types';

import * as styles from './ChatList.module.scss';
import chatListTmpl from './ChatList.tmpl';

interface ChatListProps {
  staticData: Record<string, any>
  chats: ChatTab[]
}

export default class ChatList extends Block<BaseProps> {
  static className = 'ChatList';

  constructor(props: ChatListProps) {
    super({
      ...props,
      styles,
      next,
      onMoveToProfile: () => {
        PathRouter.go(Routes.Profile.path);
      },
      onAddChat() {
        portal(AddChat, { staticData: props.staticData.addChat });
      },
    });
  }

  render() {
    return chatListTmpl();
  }
}

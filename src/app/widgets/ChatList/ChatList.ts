import next from 'bundle-text:./next.svg';

import Block from '../../../utils/Core/Block';

import { RandomChatTabData } from '../../mocks/chats';

import PathRouter from '../../../utils/Router/PathRouter';

import { Routes } from '../../../utils/Router/Routes';

import chatListTmpl from './ChatList.tmpl';
import * as styles from './ChatList.module.scss';

interface ChatListProps {
  staticData: Record<string, any>
  data: RandomChatTabData[]
}

export default class ChatList extends Block {
  static className = 'ChatList';
  constructor(props: ChatListProps) {
    super({
      ...props,
      styles,
      next,
      onMoveToProfile: () => {
        PathRouter.go(Routes.Profile.path);
      },
    });
  }

  render() {
    return chatListTmpl();
  }
}
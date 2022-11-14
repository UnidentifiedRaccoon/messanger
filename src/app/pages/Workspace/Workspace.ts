import Block from '../../../utils/Core/Block';

import informer from '../../../utils/Core/informer';

import { Thunks } from '../../../utils/Store/Store';

import { withChats } from '../../../utils/Store/connect';

import { ChatTab } from '../../../utils/Api/Chats/Types';

import * as styles from './Workspace.module.scss';
import workspaceTmpl from './Workspace.tmpl';
import staticData from './Workspace.ru.json';

// const amount = randomN(4);
// Static data don't work properly, so use random (parameter true)
// const sorted = chatsTimeSort(generateChatListData(amount)) || [];
// let recentChatData: ChatData | undefined;
// if (sorted.length !== 0) recentChatData = generatedChatsData.find((chat) => chat.id === sorted[0].id);

type WorkspaceProps = {
  chats: ChatTab[]
};

class Workspace extends Block {
  constructor({ chats, ...rawProps }: WorkspaceProps) {
    super({
      ...rawProps,
      staticData,
      styles,
      chats,
      // chatData: recentChatData,
    });
  }

  protected async componentDidMount() {
    try {
      await Thunks.getChats();
    } catch (err: any) {
      informer(err.message);
    }
  }

  render() {
    return workspaceTmpl();
  }
}

export default withChats(Workspace);

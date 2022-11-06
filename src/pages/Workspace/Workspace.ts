import Block from '../../utils/Core/Block';

import { randomN } from '../../mocks/utils';
import { chatsTimeSort } from '../../utils/common/sort';
import { generateChatListData } from '../../mocks/chats';
import generatedChatsData from '../../mocks/generator';

import ChatData from '../../mocks/chat';

import * as styles from './Workspace.module.scss';
import workspaceTmpl from './Workspace.tmpl';
import staticData from './Workspace.ru.json';

const amount = randomN(4);
// Static data don't work properly, so use random (parameter true)
const sorted = chatsTimeSort(generateChatListData(amount)) || [];
let recentChatData: ChatData | undefined;
if (sorted.length !== 0) recentChatData = generatedChatsData.find((chat) => chat.id === sorted[0].id);

export default class Workspace extends Block {
  constructor(rawProps: any) {
    super({
      ...rawProps, staticData, styles, chatListData: sorted, chatData: recentChatData,
    });
  }

  render() {
    return workspaceTmpl();
  }
}

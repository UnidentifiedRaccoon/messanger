import { generateChatListData } from '../../mocks/chats';

import { randomN } from '../../mocks/utils';

import generatedChatsData from '../../mocks/generator';

import { chatsTimeSort } from '../../utils/sort';

import template from './workspace.hbs';
import staticData from './workspace.ru.json';
import * as styles from './workspace.module.scss';

const amount = randomN(4);
// Static data don't work properly, so use random (parameter true)
const sorted = chatsTimeSort(generateChatListData(amount)) || [];
let recentChatData = [];
if (sorted.length !== 0) recentChatData = generatedChatsData.find((chat) => chat.id === sorted[0].id);

export default template({
  styles, staticData, chatListData: sorted, chatData: recentChatData,
});

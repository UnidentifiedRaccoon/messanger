import { generateChatListData } from '../../mocks/chats';

import { randomN } from '../../mocks/utils';

import template from './workspace.hbs';
import staticData from './workspace.ru.json';
import styles from './workspace.module.scss';

const timeSort = (arr) => arr.sort((a, b) => new Date(b.lastMessage.time) - new Date(a.lastMessage.time));
const amount = randomN(0);
const sorted = timeSort(generateChatListData(amount, true));
const resentChatData = sorted[0];
export default template({
  styles, staticData, chatListData: sorted, chatData: resentChatData,
});

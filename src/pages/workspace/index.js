import { generateChatListData } from '../../mocks/chats';

import template from './workspace.hbs';
import staticData from './workspace.ru.json';
import styles from './workspace.module.scss';

const timeSort = (arr) => arr.sort((a, b) => new Date(b.lastMessage.time) - new Date(a.lastMessage.time));
const sorted = timeSort(generateChatListData(5, true));
const resentChatData = sorted[0];
export default template({
  styles, staticData, chatListData: sorted, chatData: resentChatData,
});

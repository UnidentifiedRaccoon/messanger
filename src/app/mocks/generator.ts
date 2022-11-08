import ChatData from './chat';

const generatedChatsData: ChatData[] = [...new Array(5)].map((_, i) => new ChatData(i));
export default generatedChatsData;

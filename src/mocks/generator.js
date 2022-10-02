import ChatData from './chat';

const generatedChatsData = [...new Array(5)].map((item, i) => new ChatData(i));
export default generatedChatsData;

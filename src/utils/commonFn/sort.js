const chatsTimeSort = (arr) => arr.sort((a, b) => new Date(b.lastMessage.time) - new Date(a.lastMessage.time));
const messagesTimeSort = (arr) => arr.sort((a, b) => new Date(b.time) - new Date(a.time));
export { chatsTimeSort, messagesTimeSort };

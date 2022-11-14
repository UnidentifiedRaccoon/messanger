// language=hbs
const workspaceTmpl = () => `
    <div class={{styles.workspace}}>
        <h1 class="visually-hidden">
            {{staticData.title}}
        </h1>
        <div class={{styles.chat-list}}>
            {{{ ChatList chats=chats staticData=staticData.chatList }}}
        </div>
        <div class={{styles.chat}}>
            {{{ Chat staticData=staticData.chat }}}
        </div>
    </div>
  `;

export default workspaceTmpl;

// language=hbs
const workspaceTmpl = () => `
    <div class={{styles.workspace}}>
        <h1 class="visually-hidden">
            {{staticData.title}}
        </h1>
        <div class={{styles.chat-list}}>
            {{{ ChatList data=chatListData staticData=staticData.chatList }}}
        </div>
        <div class={{styles.chat}}>
            {{{ Chat data=chatData staticData=staticData.chat }}}
        </div>
    </div>
  `;

export default workspaceTmpl;
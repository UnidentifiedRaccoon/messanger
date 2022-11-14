// language=hbs
const chatTmpl = (isChatOwner: boolean) => `
    <section class={{styles.chat}}>
        <h2 class="visually-hidden">
            {{staticData.title}}
        </h2>
        {{#if activeChat}}
            <header class= {{ styles.header }}>
                {{{ IconProfile outerStyles=styles.profile-icon }}}
                <h3 class={{styles.title}}>{{activeChat.title}}</h3>
                {{{ Cross typeMode="add" outerStyles=styles.delete-btn onClick=onAddUserToChat }}}
                {{#if ${isChatOwner}}}
                    {{{ Cross typeMode="delete" outerStyles=styles.delete-btn onClick=onChatDelete }}}
                {{/if}}
            </header>
            {{{ ChatContent data=activeChat staticData=staticData }}}
            {{{ ChatMessageBar staticData=staticData }}}
        {{else}} 
            {{{ ChatEmpty text=staticData.emptyChat }}}
        {{/if}}
    </section>
`;

export default chatTmpl;

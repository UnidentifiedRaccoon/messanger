// language=hbs
const chatListTmpl = () => `
    <section class={{styles.chat-list}}>
        <h2 class="visually-hidden">
            {{staticData.title}}
        </h2>
        <header class= {{ styles.header }}>
            <div class= {{ styles.header-top-row}}>
                {{{ Cross typeMode="add" outerStyles=styles.add-chat-btn }}}
                {{# Link onClick=onMoveToProfile outerStyles=styles.profile-link }}
                    {{staticData.profileLink}}
                    {{{ IconInline icon=next outerStyles=styles.icon-next }}}
                {{/Link}}
            </div>
            {{{ Search placeholder=staticData.searchPlaceholder }}}
        </header>
        {{{ ChatTabs data=data }}}
    </section>
`;

export default chatListTmpl;

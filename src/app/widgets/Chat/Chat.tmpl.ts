// language=hbs
const chatTmpl = () => `
    <section class={{styles.chat}}>
        <h2 class="visually-hidden">
            {{staticData.title}}
        </h2>
        {{#if data}}
            <header class= {{ styles.header }}>
                {{{ IconProfile outerStyles=styles.profile-icon }}}
                <h3 class={{styles.title}}>{{data.title}}</h3>
                {{{ Cross typeMode="delete" outerStyles=styles.delete-btn }}}
            </header>
            {{{ ChatContent data=data staticData=staticData }}}
            {{{ ChatMessageBar placeholder=data.messageField }}}
        {{else}}
            {{{ ChatEmpty text=staticData.emptyChat }}}
        {{/if}}
    </section>
`;

export default chatTmpl;

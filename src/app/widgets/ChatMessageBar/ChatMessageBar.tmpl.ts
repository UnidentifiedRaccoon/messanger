// language=hbs
const chatMessageBarTmpl = () => `
    <section class={{styles.bar}}>
    {{# Form outerStyles=styles.form onSubmit=onSubmit shouldReset=true}}
            <h3 class="visually-hidden">
                {{staticData.inputFormTitle}}
            </h3>
            <button class={{styles.attachment-btn}}>
                {{{ IconInline icon=attachment outerStyles=styles.icon-attachment }}}
            </button>
            {{{ MessageInput placeholder=staticData.messagePlaceholder outerStyles=styles.message-input }}}
            {{{ Arrow text=staticData.submitBtn dirMode="right" }}}
    {{/Form}}
    </section>
`;

export default chatMessageBarTmpl;

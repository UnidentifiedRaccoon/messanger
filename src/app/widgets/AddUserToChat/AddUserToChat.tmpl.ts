// language=hbs
const addUserToChatTmpl = () => `
    <div class="{{styles.add-chat}}">
        {{#Backdrop}}
            {{#Overlay outerStyles=styles.overlay}}
                    <header class="{{styles.header}}">
                        <h3 class="title {{styles.title}}">
                            {{staticData.title}}
                        </h3>
                        {{{ Cross typeMode="delete" outerStyles=styles.close-btn onClick=onClose }}}
                    </header>
                    {{# Form outerStyles=styles.form
                             onSubmit=onSubmit
                             submitLabel=staticData.submitBtn
                             formError=formSubmitError
                             refs=refs
                    }}
                        {{{ ControlledInput
                                name="userId"
                                placeholder=staticData.placeholder
                                outerStyles=styles.field
                        }}}
                    {{/Form}}
            {{/Overlay}}
        {{/Backdrop}}
    </div>
`;

export default addUserToChatTmpl;

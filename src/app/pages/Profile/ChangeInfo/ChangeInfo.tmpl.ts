// language=hbs
const changeInfoTmpl = () => `
    <main class="{{styles.profile}} {{styles.change-info}}">
        <h1 class="visually-hidden">
            {{staticData.titleChangeInfo}}
        </h1>
        {{# Link onClick=onMoveToBack outerStyles=styles.go-back }}
            {{{ Arrow text=staticData.goBackText }}}
        {{/Link}}
        <div class={{styles.content}}>
            <div class={{styles.icon_wrapper}}>
                {{{ IconProfile alt=staticData.userName  icon=user.avatar }}}
            </div>
            <div class={{styles.form-wrapper}}>
                {{# Form outerStyles=styles.form
                         onSubmit=onSubmit
                         submitLabel=staticData.submitBtn
                         formError=formSubmitError
                         refs=refs
                }}
                    <div>
                        {{{ ControlledInput 
                            name="email"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.email
                            defaultValue=user.email
                            onInput=onInput
                            onFocus=onFocus
                            validateType="email"
                        }}}
                        {{{ ControlledInput
                            name="login"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.login
                            defaultValue=user.login
                            onInput=onInput
                            onFocus=onFocus
                            validateType="login"
                        }}}
                        {{{ ControlledInput
                            name="name"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.name
                            defaultValue=user.name
                            onInput=onInput
                            onFocus=onFocus
                            validateType="name"
                        }}}
                        {{{ ControlledInput
                            name="surname"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.surname
                            defaultValue=user.surname
                            onInput=onInput
                            onFocus=onFocus
                            validateType="name"
                        }}}
                        {{{ ControlledInput
                            name="displayName"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.displayName
                            defaultValue=user.displayName
                            onInput=onInput
                            onFocus=onFocus
                            validateType="name"
                        }}}
                        {{{ ControlledInput
                            name="phone"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.phone
                            defaultValue=user.phone
                            onInput=onInput
                            onFocus=onFocus
                            validateType="phone"
                        }}}
                    </div>
                {{/Form}}
            </div>
        </div>
    </main>
`;

export default changeInfoTmpl;

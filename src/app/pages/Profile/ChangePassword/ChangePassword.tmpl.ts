// language=hbs
const changePasswordTmpl = () => `
    <div class="{{styles.profile}} {{styles.change-password}}">
        <h1 class="visually-hidden">
            {{staticData.titleChangePassword}}
        </h1>
        {{# Link onClick=onMoveToBack outerStyles=styles.go-back }}
            {{{ Arrow text=staticData.goBackText }}}
        {{/Link}}
        <div class={{styles.content}}>
            <div class={{styles.icon}}>
                {{{ IconProfile alt=staticData.userName icon=user.avatar}}}
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
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.oldPassword
                            defaultValue=user.password
                            name="oldPassword"
                            onInput=onInput
                            onFocus=onFocus
                            validateType="password"
                        }}}
                        {{{ ControlledInput
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.newPassword
                            name="newPassword"
                            onInput=onInput
                            onFocus=onFocus
                            validateType="password"
                        }}}
                        {{{ ControlledInput styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.newPasswordRepeat
                            name="newPasswordRepeat"
                            onInput=onInput
                            onFocus=onFocus
                            validateType="password"
                        }}}
                    </div>
                {{/Form}}
            </div>
        </div>
    </div>
`;

export default changePasswordTmpl;

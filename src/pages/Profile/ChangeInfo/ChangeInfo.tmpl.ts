// language=hbs
const changeInfoTmpl = () => `
    <div class="{{styles.profile}} {{styles.change-info}}">
        <h1 class="visually-hidden">
            {{staticData.titleChangeInfo}}
        </h1>
        <a href="./profile" class={{styles.go-back}}>
            {{{ Arrow text=staticData.goBackText }}}
        </a>
        <div class={{styles.content}}>
            <div class={{styles.icon}}>
                {{{ IconProfile alt=staticData.userName }}}
            </div>
            <div class={{styles.form-wrapper}}>
                {{# Form outerStyles=styles.form onSubmit=onSubmit refs=refs}}
                    <div>
                        {{{ ControlledInput 
                            name="email"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.email
                            onInput=onInput
                            onFocus=onFocus
                            validateType="email"
                        }}}
                        {{{ ControlledInput
                            name="login"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.login
                            onInput=onInput
                            onFocus=onFocus
                            validateType="login"
                        }}}
                        {{{ ControlledInput
                            name="name"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.name
                            onInput=onInput
                            onFocus=onFocus
                            validateType="name"
                        }}}
                        {{{ ControlledInput
                            name="surname"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.surname
                            onInput=onInput
                            onFocus=onFocus
                            validateType="name"
                        }}}
                        {{{ ControlledInput
                            name="nickname"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.nickname
                            onInput=onInput
                            onFocus=onFocus
                            validateType="name"
                        }}}
                        {{{ ControlledInput
                            name="phone"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.phone
                            onInput=onInput
                            onFocus=onFocus
                            validateType="phone"
                        }}}
                    </div>
                    {{{ Button label=staticData.submitBtn outerStyles=styles.submit-btn }}}
                {{/Form}}
            </div>
        </div>
    </div>
`;

export default changeInfoTmpl;

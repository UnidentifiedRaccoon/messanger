// language=hbs
const profileTmpl = () => `
    <div class={{styles.profile}}>
        <h1 class="visually-hidden">
            {{staticData.titleProfile}}
        </h1>
        <a href="./workspace" class={{styles.go-back}}>
            {{{ Arrow text=staticData.goBackText }}}
        </a>
        <div class={{styles.content}}>
            <div class={{styles.icon_wrapper}}>
                {{{ IconProfile alt=staticData.userName  }}}
            </div>
            <h2 class="title {{styles.title}}">
                {{staticData.userName}}
            </h2>
            <div class={{styles.form-wrapper}}>
                {{# Form outerStyles=styles.form}}
                    <div>
                        {{{ ControlledInput
                            name="email"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.email
                            onInput=onInput
                            onFocus=onFocus
                            validateType="email"
                            readonly="true"
                        }}}
                        {{{ ControlledInput
                            name="login"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.login
                            onInput=onInput
                            onFocus=onFocus
                            validateType="login"
                            readonly="true"
                        }}}
                        {{{ ControlledInput
                            name="name"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.name
                            onInput=onInput
                            onFocus=onFocus
                            validateType="name"
                            readonly="true"
                        }}}
                        {{{ ControlledInput
                            name="surname"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.surname
                            onInput=onInput
                            onFocus=onFocus
                            validateType="name"
                            readonly="true"
                        }}}
                        {{{ ControlledInput
                            name="nickname"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.nickname
                            onInput=onInput
                            onFocus=onFocus
                            validateType="name"
                            readonly="true"
                        }}}
                        {{{ ControlledInput
                            name="phone"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.phone
                            onInput=onInput
                            onFocus=onFocus
                            validateType="phone"
                            readonly="true"
                        }}}
                    </div>
                {{/Form}}
                {{{ Link path="./change_info" text=staticData.infoChange outerStyles=styles.link }}}
                {{{ Link path="./change_password" text=staticData.passwordChange outerStyles=styles.link }}}
                {{{ Link path="./login" text=staticData.exit outerStyles=styles.link }}}
            </div>
        </div>
    </div>
`;

export default profileTmpl;

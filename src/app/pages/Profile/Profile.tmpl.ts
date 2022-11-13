// language=hbs
const profileTmpl = () => `
    <div class={{styles.profile}}>
        <h1 class="visually-hidden">
            {{staticData.titleProfile}}
        </h1>
        {{# Link onClick=onMoveToBack outerStyles=styles.go-back }}
            {{{ Arrow text=staticData.goBackText }}}
        {{/Link}}
        <div class={{styles.content}}>
            {{#AvatarLoader outerStyles=styles.icon onClick=onLoadAvatar}}
                {{{ IconProfile alt=staticData.userName icon=user.avatar}}}
            {{/AvatarLoader}}
            <h2 class="title {{styles.title}}">
                {{user.name}} {{user.surname}}
            </h2>
            <div class={{styles.form-wrapper}}>
                {{# Form outerStyles=styles.form}}
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
                            readonly="true"
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
                            readonly="true"
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
                            readonly="true"
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
                            readonly="true"
                        }}}
                        {{{ ControlledInput
                            name="nickname"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.displayName
                            defaultValue=user.displayName
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
                            defaultValue=user.phone
                            onInput=onInput
                            onFocus=onFocus
                            validateType="phone"
                            readonly="true"
                        }}}
                    </div>
                {{/Form}}
                {{# Link onClick=onMoveToChangeInfo outerStyles=styles.link }}
                    {{staticData.infoChange}}
                {{/Link}}
                {{# Link onClick=onMoveToChangePassword outerStyles=styles.link }}
                    {{staticData.passwordChange}}
                {{/Link}}
                {{# Link onClick=onExit outerStyles=styles.link }}
                    {{staticData.exit}}
                {{/Link}}
            </div>
        </div>
    </div>
`;

export default profileTmpl;

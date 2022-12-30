// language=hbs
const profileTmpl = () => `
    <main class={{styles.profile}}>
        <h1 class="visually-hidden">
            {{staticData.titleProfile}}
        </h1>
        {{# Link onClick=onMoveToBack outerStyles=styles.go-back }}
            {{{ Arrow text=staticData.goBackText }}}
        {{/Link}}
        <div class={{styles.content}}>
            <div class={{styles.icon-wrapper}}>
              {{#AvatarLoader outerStyles=styles.icon onClick=onLoadAvatar}}
                  {{{ IconProfile alt=staticData.userName icon=user.avatar}}}
              {{/AvatarLoader}}
            </div>
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
                            readonly="true"
                        }}}
                        {{{ ControlledInput
                            name="login"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.login
                            defaultValue=user.login
                            readonly="true"
                        }}}
                        {{{ ControlledInput
                            name="name"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.name
                            defaultValue=user.name
                            readonly="true"
                        }}}
                        {{{ ControlledInput
                            name="surname"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.surname
                            defaultValue=user.surname
                            readonly="true"
                        }}}
                        {{{ ControlledInput
                            name="nickname"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.displayName
                            defaultValue=user.displayName
                            readonly="true"
                        }}}
                        {{{ ControlledInput
                            name="phone"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.phone
                            defaultValue=user.phone
                            readonly="true"
                        }}}
                        {{{ ControlledInput
                            name="id"
                            styleMode='profile'
                            outerStyles=styles.field
                            tooltip=staticData.userId
                            defaultValue=user.id
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
    </main>
`;

export default profileTmpl;

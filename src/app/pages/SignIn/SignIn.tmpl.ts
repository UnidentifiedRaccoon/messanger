// language=hbs
const signInTmpl = () => `
    <div class="{{styles.sign-in}}">
        {{# Overlay}}
            <h1 class="title {{styles.title}}">
                {{staticData.title}}
            </h1>
            {{# Form outerStyles=styles.form onSubmit=onSubmit refs=refs}}
                {{{ ControlledInput
                    tooltip=staticData.email
                    outerStyles=styles.field
                    name="email"
                    onInput=onInput
                    onFocus=onFocus
                    validateType="email"
                }}}
                {{{ ControlledInput
                    tooltip=staticData.login
                    outerStyles=styles.field
                    name="login"
                    onInput=onInput
                    onFocus=onFocus
                    validateType="login"
                }}}
                {{{ ControlledInput
                    tooltip=staticData.name
                    outerStyles=styles.field
                    name="name"
                    onInput=onInput
                    onFocus=onFocus
                    validateType="name"
                }}}
                {{{ ControlledInput
                    tooltip=staticData.surname
                    outerStyles=styles.field
                    name="surname"
                    onInput=onInput
                    onFocus=onFocus
                    validateType="name"
                }}}
                {{{ ControlledInput
                    tooltip=staticData.phone
                    outerStyles=styles.field
                    name="phone"
                    onInput=onInput
                    onFocus=onFocus
                    validateType="phone"
                }}}
                {{{ ControlledInput
                    tooltip=staticData.password
                    outerStyles=styles.field
                    name="password"
                    type="password"
                    onInput=onInput
                    onFocus=onFocus
                    validateType="password"
                }}}
                {{{ ControlledInput 
                    tooltip=staticData.passwordRepeat
                    outerStyles=styles.field 
                    name="passwordRepeat"
                    type="password"
                    onInput=onInput
                    onFocus=onFocus
                    validateType="password"
                }}}
                {{{ Button label=staticData.submitBtn outerStyles=styles.submit-btn }}}
            {{/Form}}
            {{{ Link path="./login" text=staticData.loginLink outerStyles=styles.link }}}
        {{/Overlay}}
    </div>
  `;

export default signInTmpl;

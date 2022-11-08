// language=hbs
const loginTmpl = () => `
    <div class="{{styles.login}}">
        {{# Overlay }}
            <h1 class="title {{styles.title}}">
                {{staticData.title}}
            </h1>

            {{# Form outerStyles=styles.form onSubmit=onSubmit refs=refs}}
                {{{ ControlledInput 
                    name="login"
                    tooltip=staticData.login
                    outerStyles=styles.field 
                    onInput=onInput
                    onFocus=onFocus
                    validateType="login"
                }}}
                {{{ ControlledInput name="password"
                    tooltip=staticData.password
                    outerStyles=styles.field
                    type="password"
                    onInput=onInput
                    onFocus=onFocus
                    validateType="password"
                }}}
                {{{ Button label=staticData.submitBtn outerStyles=styles.submit-btn }}}
            {{/Form}}
            {{{ Link path="./sign_in" text=staticData.signInLink outerStyles=styles.link }}}
        {{/Overlay}}
    </div>
  `;

export default loginTmpl;

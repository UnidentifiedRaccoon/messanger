// language=hbs
const loginTmpl = () => `
    <div class="{{styles.login}}">
        {{# Overlay }}
            <h1 class="title {{styles.title}}">
                {{staticData.title}}
            </h1>

            {{# Form outerStyles=styles.form
                     onSubmit=onSubmit
                     submitLabel=staticData.submitBtn
                     formError=formSubmitError
                     refs=refs
            }}
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
            {{/Form}}
            {{# Link onClick=onMoveToSignIn outerStyles=styles.link }}
                {{staticData.signInLink}}
            {{/Link}}
        {{/Overlay}}
    </div>
  `;

export default loginTmpl;

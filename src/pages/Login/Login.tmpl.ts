// language=hbs
const loginTmpl = () => `
    <div class="{{styles.login}}">
        {{# Overlay }}
            <h1 class="title {{styles.title}}">
                {{staticData.title}}
            </h1>

            {{# Form outerStyles=styles.form onSubmit=onSubmit }}
                {{{ Input name="login" tooltip=staticData.login outerStyles=styles.field required=true }}}
                {{{ Input name="password" tooltip=staticData.password outerStyles=styles.field type="password" }}}
                {{{ Button label=staticData.submitBtn outerStyles=styles.submit-btn }}}
            {{/Form}}
            {{{ Link path="./sign_in" text=staticData.signInLink outerStyles=styles.link }}}
        {{/Overlay}}
    </div>
  `;

export default loginTmpl;

// language=hbs
const signInTmpl = () => `
    <div class="{{styles.sign-in}}">
        {{# Overlay}}
            <h1 class="title {{styles.title}}">
                {{staticData.title}}
            </h1>
            {{# Form outerStyles=styles.form onSubmit=onSubmit}}
                {{{ Input tooltip=staticData.email outerStyles=styles.field name="email" }}}
                {{{ Input tooltip=staticData.login outerStyles=styles.field name="login"}}}
                {{{ Input tooltip=staticData.name outerStyles=styles.field name="name"}}}
                {{{ Input tooltip=staticData.surname outerStyles=styles.field name="surname"}}}
                {{{ Input tooltip=staticData.phone outerStyles=styles.field name="phone"}}}
                {{{ Input tooltip=staticData.password outerStyles=styles.field name="password" type="password" }}}
                {{{ Input 
                  tooltip=staticData.passwordRepeat
                  outerStyles=styles.field 
                  name="passwordRepeat"
                  type="password" 
                }}}
                {{{ Button label=staticData.submitBtn outerStyles=styles.submit-btn }}}
            {{/Form}}
            {{{ Link path="./login" text=staticData.loginLink outerStyles=styles.link }}}
        {{/Overlay}}
    </div>
  `;

export default signInTmpl;

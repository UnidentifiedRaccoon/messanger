// language=hbs
const signInTmpl = () => `
    <div class="{{styles.sign-in}}">
        {{# Overlay}}
            <h1 class="title {{styles.title}}">
                {{staticData.title}}
            </h1>
            {{# Form outerStyles=styles.form}}
                {{{ Input tooltip=staticData.email outerStyles=styles.field }}}
                {{{ Input tooltip=staticData.login outerStyles=styles.field }}}
                {{{ Input tooltip=staticData.name outerStyles=styles.field }}}
                {{{ Input tooltip=staticData.surname outerStyles=styles.field }}}
                {{{ Input tooltip=staticData.phone outerStyles=styles.field }}}
                {{{ Input tooltip=staticData.password outerStyles=styles.field }}}
                {{{ Input tooltip=staticData.passwordRepeat outerStyles=styles.field }}}
                {{{ Button label=staticData.submitBtn outerStyles=styles.submit-btn }}}
            {{/Form}}
            {{{ Link path="./login" text=staticData.loginLink outerStyles=styles.link }}}
        {{/Overlay}}
    </div>
  `;

export default signInTmpl;
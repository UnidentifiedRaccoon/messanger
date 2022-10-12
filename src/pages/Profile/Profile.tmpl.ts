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
                        {{{ Input styleMode='profile' outerStyles=styles.field tooltip=staticData.email }}}
                        {{{ Input styleMode='profile' outerStyles=styles.field tooltip=staticData.login }}}
                        {{{ Input styleMode='profile' outerStyles=styles.field tooltip=staticData.name }}}
                        {{{ Input styleMode='profile' outerStyles=styles.field tooltip=staticData.surname }}}
                        {{{ Input styleMode='profile' outerStyles=styles.field tooltip=staticData.nickname }}}
                        {{{ Input styleMode='profile' outerStyles=styles.field tooltip=staticData.phone }}}
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

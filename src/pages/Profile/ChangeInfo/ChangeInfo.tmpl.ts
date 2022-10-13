// language=hbs
const changeInfoTmpl = () => `
    <div class="{{styles.profile}} {{styles.change-info}}">
        <h1 class="visually-hidden">
            {{staticData.titleChangeInfo}}
        </h1>
        <a href="./profile" class={{styles.go-back}}>
            {{{ Arrow text=staticData.goBackText }}}
        </a>
        <div class={{styles.content}}>
            <div class={{styles.icon}}>
                {{{ IconProfile alt=staticData.userName }}}
            </div>
            <div class={{styles.form-wrapper}}>
                {{# Form outerStyles=styles.form onSubmit=onSubmit}}
                    <div>
                        {{{ Input styleMode='profile' outerStyles=styles.field tooltip=staticData.email name="email"}}}
                        {{{ Input styleMode='profile' outerStyles=styles.field tooltip=staticData.login name="login"}}}
                        {{{ Input styleMode='profile' outerStyles=styles.field tooltip=staticData.name name="name"}}}
                        {{{ Input styleMode='profile' 
                          outerStyles=styles.field
                          tooltip=staticData.surname
                          name="surname"
                        }}}
                        {{{ Input styleMode='profile'
                          outerStyles=styles.field
                          tooltip=staticData.nickname
                          name="nickname"
                        }}}
                        {{{ Input styleMode='profile' outerStyles=styles.field tooltip=staticData.phone name="phone"}}}
                    </div>
                    {{{ Button label=staticData.submitBtn outerStyles=styles.submit-btn }}}
                {{/Form}}
            </div>
        </div>
    </div>
`;

export default changeInfoTmpl;

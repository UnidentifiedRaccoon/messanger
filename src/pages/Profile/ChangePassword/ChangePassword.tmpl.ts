// language=hbs
const changePasswordTmpl = () => `
    <div class="{{styles.profile}} {{styles.change-password}}">
        <h1 class="visually-hidden">
            {{staticData.titleChangePassword}}
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
                        {{{ Input styleMode='profile'
                          outerStyles=styles.field
                          tooltip=staticData.oldPassword
                          name="oldPassword"
                        }}}
                        {{{ Input styleMode='profile'
                          outerStyles=styles.field
                          tooltip=staticData.newPassword
                          name="newPassword" 
                        }}}
                        {{{ Input styleMode='profile'
                          outerStyles=styles.field
                          tooltip=staticData.newPasswordRepeat
                          name="newPasswordRepeat" 
                        }}}
                    </div>
                    {{{ Button label=staticData.submitBtn outerStyles=styles.submit-btn }}}
                {{/Form}}
            </div>
        </div>
    </div>
`;

export default changePasswordTmpl;

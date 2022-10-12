// language=hbs
const supportTmpl = () => `
    <div class="{{styles.login}}">
        {{{Button label="hello" onClick=buttonHandler.onClick}}}
        {{{Button label="click" onClick=buttonHandler.onClick}}}
        {{{Button label="sdf" onClick=buttonHandler.onClick}}}
        {{{Button label="1234" onClick=buttonHandler.onClick}}}
    </div>
  `;

export default supportTmpl;

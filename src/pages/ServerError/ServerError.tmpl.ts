// language=hbs
const serverErrorTmpl = () => `
    <div>
        <h1 class="visually-hidden">
            {{staticData.title}}
        </h1>
        {{{ RequestError staticData=staticData }}}
    </div>
  `;

export default serverErrorTmpl;

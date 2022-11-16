// language=hbs
const clientErrorTmpl = () => `
    <main>
        <h1 class="visually-hidden">
            {{staticData.title}}
        </h1>
        {{{ RequestError staticData=staticData }}}
      </main>
  `;

export default clientErrorTmpl;

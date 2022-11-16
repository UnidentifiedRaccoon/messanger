// language=hbs
const serverErrorTmpl = () => `
    <main>
      <h1 class="visually-hidden">
          {{staticData.title}}
      </h1>
      {{{ RequestError staticData=staticData }}}
    </main>
  `;

export default serverErrorTmpl;

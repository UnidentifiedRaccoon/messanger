// language=hbs
const clientErrorTmpl = () => `
    <div>
        <h1 class="visually-hidden">
            {{staticData.title}}
        </h1>
        {{> CriticalSiteError }}
    </div>
  `;

export default clientErrorTmpl;

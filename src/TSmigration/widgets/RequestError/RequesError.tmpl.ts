// language=hbs
const requestErrorTmpl = () => `
  <div class="{{styles.wrapper}}">
    <span class="{{styles.code}}">
        {{staticData.code}}
    </span>
    <h2 class="title {{styles.messages}}">
        {{#each staticData.messages}}
            {{this}}<br>
        {{/each}}
    </h2>
    {{{ Link path="./workspace" text=staticData.backLink outerStyles=styles.back-link }}}
</div>
`;

export default requestErrorTmpl;

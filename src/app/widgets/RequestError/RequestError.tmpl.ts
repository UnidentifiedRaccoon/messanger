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
      {{# Link onClick=onMoveToWorkspace outerStyles=styles.link }}
          {{staticData.backLink}}
      {{/Link}}
</div>
`;

export default requestErrorTmpl;

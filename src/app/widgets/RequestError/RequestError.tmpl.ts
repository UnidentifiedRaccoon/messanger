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
      {{#if authStatus}}
        {{# Link onClick=onMoveToWorkspace outerStyles=styles.link }}
            {{staticData.toChats}}
        {{/Link}}
      {{else}}
          {{# Link onClick=onMoveToLogin outerStyles=styles.link }}
              {{staticData.toLogin}}
          {{/Link}}
      {{/if}}
</div>
`;

export default requestErrorTmpl;

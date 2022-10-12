// language=hbs
const bubbleTmpl = () => `
  <span class={{styles.bubble}}>
    <span class={{styles.bubble-glass}}>
        {{#if time}}
            <time datetime={{time.datetime}}>{{time.formatted}}</time>
        {{else}}
            {{text}}
        {{/if}}
    </span>
  </span>
`;

export default bubbleTmpl;

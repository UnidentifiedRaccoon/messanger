// language=hbs
const messageTmpl = () => `
  <div class='{{styles.message}} {{modClasses}}'>
      {{#if showAvatar}}
          <span class={{styles.tail}}></span>
          {{{ IconProfile  icon=author.avatarUrl outerStyles=styles.user-icon }}}
      {{/if}}
      <span class={{styles.display-name}}>{{author.displayName}}</span>
      <p class={{styles.text}}>
        {{context.text}}
      </p>
    <time class={{styles.time}} datetime={{context.time.datetime}} >
      {{context.time.formatted}}
    </time>
  </div>
`;

export default messageTmpl;

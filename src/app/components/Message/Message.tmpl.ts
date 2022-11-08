// language=hbs
const messageTmpl = () => `
  <div class={{styles.message}}>
    <p>
      {{context.text}}
    </p>
    <time class={{styles.time}} datetime={{context.time.datetime}} >
      {{context.time.formatted}}
    </time>
  </div>
`;

export default messageTmpl;

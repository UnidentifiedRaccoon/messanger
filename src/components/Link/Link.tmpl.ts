// language=hbs
const linkTmpl = () => `
    <a href="{{path}}" class="{{styles.link}} {{outerStyles}}">
        {{text}}
    </a>
  `;

export default linkTmpl;

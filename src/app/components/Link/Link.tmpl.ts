// language=hbs
const linkTmpl = () => `
    <a href="{{path}}" class="{{styles.link}} {{outerStyles}}">
        <div data-slot="1"></div>
    </a>
  `;

export default linkTmpl;

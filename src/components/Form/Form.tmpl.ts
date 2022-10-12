// language=hbs
const formTmpl = () => `
    <form class="{{styles.form}} {{outerStyles}}">
        <div data-slot="1"></div>
    </form>
  `;

export default formTmpl;

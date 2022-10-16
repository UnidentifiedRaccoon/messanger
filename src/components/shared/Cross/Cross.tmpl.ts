// language=hbs
const crossTmpl = () => `
    <button class="{{ styles.cross-btn }} {{ typeMode }} {{outerStyles}}">
        {{text}}
        {{{ IconInline icon=cross outerStyles=styles.icon-cross }}}
    </button>
  `;

export default crossTmpl;

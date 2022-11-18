// language=hbs
const arrowTmpl = () => `
  <button class="{{styles.arrow}} {{dirMode}} {{outerStyles}}">
      {{text}}
      {{{ IconInline icon=arrow outerStyles=styles.icon }}}
  </button>
`;

export default arrowTmpl;

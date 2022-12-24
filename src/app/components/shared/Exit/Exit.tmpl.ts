// language=hbs
const exitTmpl = () => `
  <button class="{{styles.exit}} {{outerStyles}}">
      {{text}}
      {{{ IconInline icon=exit outerStyles=styles.icon-exit }}}
  </button>
`;

export default exitTmpl;

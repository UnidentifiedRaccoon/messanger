// language=hbs
const formTmpl = () => `
    <form class="{{styles.form}} {{outerStyles}}">
        <div data-slot="1"></div>
        
<!--        Hack to get maxmin() top margin-->
        <span class="{{styles.margin}}"></span>
        {{#if submitLabel}}
          {{{ Button label=submitLabel outerStyles=styles.submit-btn }}}
        {{/if}}
    </form>
  `;

export default formTmpl;

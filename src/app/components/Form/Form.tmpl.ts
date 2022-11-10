// language=hbs
const formTmpl = () => `
    <form class="{{styles.form}} {{outerStyles}}">
        <div data-slot="1"></div>
        <span class="{{styles.error}}">{{formError}}</span>
        {{#if submitLabel}}
          {{{ Button label=submitLabel outerStyles=styles.submit-btn }}}
        {{/if}}
    </form>
  `;

export default formTmpl;

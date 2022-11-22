// language=hbs
const testBlockTmpl = () => `
    <div class="{{styles.block}}">
        text
        {{{TestButton text=innerText}}}
    </div>
  `;

export default testBlockTmpl;

// language=hbs
const avatarLoaderTmpl = () => `
    <div class="{{styles.loader}} {{outerStyles}}" tabindex="0">
        <div data-slot="1"></div>
    {{# Form outerStyles=styles.form
             ref="form"
    }}
        {{{ FileLoader accept=".png, .jpg, .jpeg" name="avatar" ref="fileLoader"}}}
    {{/Form}}
    </div>
  `;

export default avatarLoaderTmpl;

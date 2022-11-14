// language=hbs
const controlledInputTmpl = () => `
    <label class="{{ styles.label }} {{ outerStyles }}">
        <span class="{{ styles.tooltip }}">{{ tooltip }}</span>
        {{{ Input outerStyles=styles.input
            placeholder=placeholder
            defaultValue=defaultValue
            type=type
            readonly=readonly
            name=name
            onInput=onInput
            onFocus=onFocus
            onBlur=onBlur
            ref="input"
        }}}
        {{{ InputError outerStyles=styles.error-message errorMessage=errorMessage ref="error"}}}
    </label>
  `;

export default controlledInputTmpl;

// language=hbs
const inputTmpl = () => `
    <label class="{{ styles.label }} {{ outerStyles }}">
        <span class="{{ styles.tooltip }}">{{ tooltip }}</span>
        <input class="{{ styles.input }}" placeholder="{{ tooltip }}" type="{{type}}" name="{{name}}">
        <span class="{{ styles.errorMessage}}">{{ errorMessage }}</span>
    </label>
  `;

export default inputTmpl;

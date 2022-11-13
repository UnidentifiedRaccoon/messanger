// language=hbs
const inputTmpl = (readonly: boolean) => `
    <input class="{{ outerStyles }}"
           placeholder="{{ placeholder }}"
           value="{{defaultValue}}"
           type="{{type}}"
           name="{{name}}"
           ${readonly ? 'readonly' : ''}
    />
`;

export default inputTmpl;

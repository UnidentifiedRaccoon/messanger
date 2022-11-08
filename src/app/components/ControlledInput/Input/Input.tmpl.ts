// language=hbs
const inputTmpl = (readonly: boolean) => `
    <input class="{{ outerStyles }}"
           placeholder="{{ placeholder }}"
           type="{{type}}"
           name="{{name}}"
           ${readonly ? 'readonly' : ''}
    />
`;

export default inputTmpl;

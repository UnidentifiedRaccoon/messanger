// language=hbs
const messageInputTmpl = () => `
  <label class="{{ styles.label }} {{ outerStyles }}">
      <input class="{{ styles.input }}" type="text" name="message" placeholder="{{ placeholder }}">
  </label>
`;

export default messageInputTmpl;

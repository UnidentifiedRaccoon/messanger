// language=hbs
const searchTmpl = () => `
  <label class="{{ styles.label }} {{ outerStyles }}">
    <input class="{{ styles.search }}" placeholder={{ placeholder }} type="text">
    <span class="{{styles.focus-search-icon}}"></span>
    <span class="{{styles.placeholder-wrapper}}">
      <span class="{{styles.placeholder}}">{{ placeholder }}</span>
    </span>
  </label>
`;

export default searchTmpl;

// language=hbs
const FileLoaderTmpl = () => `
        <input class="{{styles.loader}}" type="file" name="{{name}}" accept="{{accept}}">
  `;

export default FileLoaderTmpl;

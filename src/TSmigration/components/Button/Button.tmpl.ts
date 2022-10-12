import styles from './Button.module.scss';

// language=hbs
const buttonTmpl = () => `
    <button class="${styles.btn} {{outerStyles}}">{{ label }} </button>
  `;

export default buttonTmpl;

import Block from 'utils/Block';

import formTmpl from './Form.tmpl';
import styles from './Form.module.scss';

export default class Form extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, styles });
  }

  render() {
    return formTmpl();
  }
}

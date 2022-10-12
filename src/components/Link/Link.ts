import Block from 'utils/Block';

import linkTmpl from './Link.tmpl';
import styles from './Link.module.scss';

export default class Link extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, styles });
  }

  render() {
    return linkTmpl();
  }
}

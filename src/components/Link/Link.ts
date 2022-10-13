import Block from 'utils/Block';

import linkTmpl from './Link.tmpl';
import * as styles from './Link.module.scss';

export default class Link extends Block {
  static className = 'Link';
  constructor(rawProps: any) {
    super({ ...rawProps, styles });
  }

  render() {
    return linkTmpl();
  }
}

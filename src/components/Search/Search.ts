import Block from 'utils/Block';

import searchTmpl from './Search.tmpl';
import * as styles from './Search.module.scss';

export default class Search extends Block {
  constructor(rawProps: any) {
    super({
      ...rawProps,
      styles,
    });
  }

  render() {
    return searchTmpl();
  }
}

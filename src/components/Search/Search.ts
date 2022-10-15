import Block from 'utils/Block';

import searchTmpl from './Search.tmpl';
import * as styles from './Search.module.scss';

interface SearchProps {
  placeholder: string
  outerStyles?: Record<string, string>
}

export default class Search extends Block {
  static className = 'Search';
  constructor(props: SearchProps) {
    super({
      ...props,
      styles,
    });
  }

  render() {
    return searchTmpl();
  }
}

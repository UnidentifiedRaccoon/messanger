import Block, { BaseProps } from '../../../utils/Core/Block';

import searchTmpl from './Search.tmpl';
import styles from './Search.module.scss';

interface SearchProps {
  placeholder: string
  outerStyles?: Record<string, string>
}

export default class Search extends Block<BaseProps> {
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

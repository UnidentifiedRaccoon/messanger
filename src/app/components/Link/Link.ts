import Block from '../../../utils/Core/Block';

import linkTmpl from './Link.tmpl';
import * as styles from './Link.module.scss';

type LinkProps = {
  path?: string
  text?: string
  outerStyles?: Record<string, string>
};

export default class Link extends Block {
  static className = 'Link';
  constructor(props: LinkProps) {
    super({ ...props, styles });
  }

  render() {
    return linkTmpl();
  }
}

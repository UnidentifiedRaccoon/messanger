import Block, { BaseProps } from '../../../../utils/Core/Block';

import arrow from './Arrow.inline.svg';

import arrowTmpl from './Arrow.tmpl';
import styles from './Arrow.module.scss';

interface ArrowProps {
  text?: string
  dirMode?: string
  outerStyles?: Record<string, string>
}

export default class Arrow extends Block<BaseProps> {
  static className = 'Arrow';
  constructor(props: ArrowProps) {
    let dirMode;
    switch (props.dirMode) {
      case 'top': dirMode = styles.top; break;
      case 'right': dirMode = styles.right; break;
      case 'bottom': dirMode = styles.bottom; break;
      default: dirMode = '';
    }
    super({
      ...props,
      styles,
      arrow,
      dirMode,
    });
  }

  render() {
    return arrowTmpl();
  }
}

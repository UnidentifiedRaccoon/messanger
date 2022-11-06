import cross from 'bundle-text:./cross.svg';

import Block from '../../../utils/Core/Block';

import crossTmpl from './Cross.tmpl';
import * as styles from './Cross.module.scss';

interface CrossProps {
  text?: string
  typeMode?: string
  outerStyles?: Record<string, string>
}

export default class Cross extends Block {
  static className = 'Cross';
  constructor(props: CrossProps) {
    let typeMode;
    switch (props.typeMode) {
      case 'delete': typeMode = styles.delete; break;
      case 'add': typeMode = styles.add; break;
      default: typeMode = '';
    }
    super({
      ...props,
      styles,
      cross,
      typeMode,
    });
  }

  render() {
    return crossTmpl();
  }
}

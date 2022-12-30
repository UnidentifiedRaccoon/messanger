import Block, { BaseProps } from '../../../../utils/Core/Block';

import cross from './Cross.inline.svg';

import crossTmpl from './Cross.tmpl';
import styles from './Cross.module.scss';

interface CrossProps {
  text?: string
  typeMode?: string
  outerStyles?: Record<string, string>
  onClick: (e: Event) => void
}

export default class Cross extends Block<BaseProps> {
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
      events: {
        click: props.onClick,
      },
    });
  }

  render() {
    return crossTmpl();
  }
}

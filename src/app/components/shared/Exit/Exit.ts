import Block, { BaseProps } from '../../../../utils/Core/Block';

import exit from './Exit.inline.svg';

import exitTmpl from './Exit.tmpl';
import styles from './Exit.module.scss';

interface ExitProps {
  text?: string
  dirMode?: string
  outerStyles?: Record<string, string>
  onClick: (e: Event) => void
}

export default class Exit extends Block<BaseProps> {
  static className = 'Exit';
  constructor(props: ExitProps) {
    super({
      ...props,
      styles,
      exit,
      events: {
        click: props.onClick,
      },
    });
  }

  render() {
    return exitTmpl();
  }
}

import Block from '../../../utils/Core/Block';

import linkTmpl from './Link.tmpl';
import * as styles from './Link.module.scss';

type LinkProps = {
  path?: string
  text?: string
  outerStyles?: Record<string, string>
  onClick?: () => void
};

export default class Link extends Block {
  static className = 'Link';
  constructor(props: LinkProps) {
    super({
      ...props,
      styles,
      events: {
        click: (event: Event) => {
          if (props.onClick) {
            event.preventDefault();
            props.onClick();
          }
        },
      },
    });
  }

  render() {
    return linkTmpl();
  }
}

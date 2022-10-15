import Block from 'utils/Block';

import bubbleTmpl from './Bubble.tmpl';
import * as styles from './Bubble.module.scss';

type BubbleProps = {
  text?: string
  time?: { datetime: string, format: string }
};

export default class Bubble extends Block {
  static className = 'Bubble';
  constructor(props: BubbleProps) {
    super({
      ...props,
      styles,
    });
  }

  render() {
    return bubbleTmpl();
  }
}

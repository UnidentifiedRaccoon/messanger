import Block, { BaseProps } from '../../../utils/Core/Block';

import bubbleTmpl from './Bubble.tmpl';
import * as styles from './Bubble.module.scss';

type BubbleProps = {
  text?: string
  time?: { datetime: string, formatted: string }
};

export default class Bubble extends Block<BaseProps> {
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

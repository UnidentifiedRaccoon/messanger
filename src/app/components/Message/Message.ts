import Block, { BaseProps } from '../../../utils/Core/Block';

import messageTmpl from './Message.tmpl';
import * as styles from './Message.module.scss';

interface MessageProps {
  context: {
    text?: string
    time?: { datetime: string, formatted: string }
  }
}

export default class Message extends Block<BaseProps> {
  static className = 'Message';
  constructor(props: MessageProps) {
    super({
      ...props,
      styles,
    });
  }

  render() {
    return messageTmpl();
  }
}

import Block from 'utils/Block';

import messageInputTmpl from './MessageInput.tmpl';
import * as styles from './MessageInput.module.scss';

interface MessageInputProps {
  placeholder: string
  outerStyles?: Record<string, string>
}

export default class MessageInput extends Block {
  static className = 'MessageInput';
  constructor(props: MessageInputProps) {
    super({
      ...props,
      styles,
    });
  }

  render() {
    return messageInputTmpl();
  }
}

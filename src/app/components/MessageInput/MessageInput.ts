import Block, { BaseProps } from '../../../utils/Core/Block';

import messageInputTmpl from './MessageInput.tmpl';
import styles from './MessageInput.module.scss';

interface MessageInputProps {
  placeholder: string
  outerStyles?: Record<string, string>
}

export default class MessageInput extends Block<BaseProps> {
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

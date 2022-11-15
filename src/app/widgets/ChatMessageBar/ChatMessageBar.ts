import attachment from 'bundle-text:./attachment.svg';

import Block from '../../../utils/Core/Block';

import chatMessageBarTmpl from './ChatMessageBar.tmpl';
import * as styles from './ChatMessageBar.module.scss';

export type MessagePayload = {
  message: string
};

type ChatMessageBarProps = {
  placeholder?: string
  onSubmit: (message: MessagePayload) => void
};

export default class ChatMessageBar extends Block {
  static className = 'ChatMessageBar';
  constructor({ onSubmit, ...props }: ChatMessageBarProps) {
    super({
      ...props,
      styles,
      attachment,
      onSubmit: (chatMessage: MessagePayload) => {
        onSubmit(chatMessage);
      },
    });
  }

  render() {
    return chatMessageBarTmpl();
  }
}

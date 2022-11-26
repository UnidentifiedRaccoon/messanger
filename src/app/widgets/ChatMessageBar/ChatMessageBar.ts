import Block, { BaseProps } from '../../../utils/Core/Block';

import attachment from './attachment.inline.svg';

import chatMessageBarTmpl from './ChatMessageBar.tmpl';
import styles from './ChatMessageBar.module.scss';

export type MessagePayload = {
  message: string
};

type ChatMessageBarProps = {
  placeholder?: string
  onSubmit: (message: MessagePayload) => void
};

export default class ChatMessageBar extends Block<BaseProps> {
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

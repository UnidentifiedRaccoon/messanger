import attachment from 'bundle-text:./attachment.svg';

import Block from '../../../utils/Core/Block';

import { PreparedFormData } from '../../../typings/commonTypes';

import chatMessageBarTmpl from './ChatMessageBar.tmpl';
import * as styles from './ChatMessageBar.module.scss';

interface ChatMessageBarProps {
  placeholder?: string
}

export default class ChatMessageBar extends Block {
  static className = 'ChatMessageBar';
  constructor(props: ChatMessageBarProps) {
    super({
      ...props,
      styles,
      attachment,
      onSubmit: (data: PreparedFormData) => {
        console.log(data);
      },
    });
  }

  render() {
    return chatMessageBarTmpl();
  }
}

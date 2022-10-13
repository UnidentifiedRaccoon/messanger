import attachment from 'bundle-text:./attachment.svg';

import Block from 'utils/Block';

import chatMessageBarTmpl from './ChatMessageBar.tmpl';
import * as styles from './ChatMessageBar.module.scss';

export default class ChatMessageBar extends Block {
  static className = 'ChatMessageBar';
  constructor(rawProps: any) {
    super({
      ...rawProps,
      styles,
      attachment,
      onSubmit: (data: any) => {
        console.log(data);
      },
    });
  }

  render() {
    return chatMessageBarTmpl();
  }
}

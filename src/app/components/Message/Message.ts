import Block, { BaseProps } from '../../../utils/Core/Block';

import messageTmpl from './Message.tmpl';
import styles from './Message.module.scss';

interface MessageProps {
  context: {
    text?: string
    time?: { datetime: string, formatted: string }
    isOwner?: boolean
    isSameAuthor?: boolean
  }
  author?: { displayName: string, avatarUrl: string }
}

export default class Message extends Block<BaseProps> {
  constructor(props: MessageProps) {
    const modClasses = {
      ownerMode: props.context.isOwner ? styles.owner : '',
      sameAuthorMode: props.context.isSameAuthor ? styles['same-author'] : '',
    };

    super({
      ...props,
      modClasses: Object.values(modClasses).join(' '),
      showAvatar: !props.context.isSameAuthor && !props.context.isOwner,
      styles,
    });
  }

  render() {
    return messageTmpl();
  }
}

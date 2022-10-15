import Block from 'utils/Block';

import chatEmptyTmpl from './ChatEmpty.tmpl';
import * as styles from './ChatEmpty.module.scss';

interface ChatEmptyProps {
  text?: string
}

export default class ChatEmpty extends Block {
  static className = 'ChatEmpty';
  constructor(props: ChatEmptyProps) {
    super({ ...props, styles });
  }

  render() {
    return chatEmptyTmpl();
  }
}

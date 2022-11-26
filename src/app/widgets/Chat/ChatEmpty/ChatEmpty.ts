import Block, { BaseProps } from '../../../../utils/Core/Block';

import chatEmptyTmpl from './ChatEmpty.tmpl';
import styles from './ChatEmpty.module.scss';

interface ChatEmptyProps {
  text?: string
}

export default class ChatEmpty extends Block<BaseProps> {
  static className = 'ChatEmpty';
  constructor(props: ChatEmptyProps) {
    super({ ...props, styles });
  }

  render() {
    return chatEmptyTmpl();
  }
}

import Block from 'utils/Block';

import chatEmptyTmpl from './ChatEmpty.tmpl';
import * as styles from './ChatEmpty.module.scss';

export default class ChatEmpty extends Block {
  static className = 'ChatEmpty';
  constructor(rawProps: any) {
    super({ ...rawProps, styles });
  }

  render() {
    return chatEmptyTmpl();
  }
}

import Block from 'utils/Block';

import chatEmptyTmpl from './ChatEmpty.tmpl';
import styles from './ChatEmpty.module.scss';

export default class ChatEmpty extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, styles });
  }

  render() {
    return chatEmptyTmpl();
  }
}

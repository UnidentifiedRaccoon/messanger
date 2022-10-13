import Block from 'utils/Block';

import { timeFormat } from '../../utils/commonFn/time';

import tabTmpl from './Tab.tmpl';
import * as styles from './Tab.module.scss';

export default class Tab extends Block {
  static className = 'Tab';
  constructor(rawProps: any) {
    const time = new Date(rawProps.data.lastMessage.time);
    const formattedTime = timeFormat(time);
    const dataCopy = {
      ...rawProps.data,
      lastMessage: {
        ...rawProps.data.lastMessage,
        time: {
          formatted: formattedTime,
          datetime: time.toISOString(),
        },
      },
    };

    super({
      ...rawProps,
      data: dataCopy,
      styles,
    });
  }

  render() {
    return tabTmpl();
  }
}

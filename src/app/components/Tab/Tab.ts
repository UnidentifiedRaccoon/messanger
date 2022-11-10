import Block from '../../../utils/Core/Block';

import { timeFormat } from '../../../utils/common/time';

import { ChatTabData } from '../../../typings/mockTypes';

import PathRouter from '../../../utils/Router/PathRouter';

import { Screens } from '../../../utils/Router/Screens';

import tabTmpl from './Tab.tmpl';
import * as styles from './Tab.module.scss';

interface TabProps {
  data: ChatTabData
  path: string
  outerStyles?: Record<string, string>
}

export default class Tab extends Block {
  static className = 'Tab';
  constructor({ data, ...props }: TabProps) {
    const time = new Date(data.lastMessage.time);
    const formattedTime = timeFormat(time);
    const dataCopy = {
      ...data,
      lastMessage: {
        ...data.lastMessage,
        time: {
          formatted: formattedTime,
          datetime: time.toISOString(),
        },
      },
    };

    super({
      ...props,
      data: dataCopy,
      styles,
      onMoveToChat: () => {
        PathRouter.go(`${Screens.Workspace.path}/${data.id}`);
      },
    });
  }

  render() {
    return tabTmpl();
  }
}

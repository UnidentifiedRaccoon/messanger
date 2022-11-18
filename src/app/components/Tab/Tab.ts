import Block, { BaseProps } from '../../../utils/Core/Block';

import { timeFormat } from '../../../utils/common/time';

import PathRouter from '../../../utils/Router/PathRouter';

import { Screens } from '../../../utils/Router/Screens';

import { ChatTab } from '../../../utils/Api/Chats/Types';

import informer from '../../../utils/Core/informer';

import { Selectors, Thunks } from '../../../utils/Store/Store';

import tabTmpl from './Tab.tmpl';
import * as styles from './Tab.module.scss';

interface TabProps {
  data: ChatTab
  path: string
  outerStyles?: Record<string, string>
}

export default class Tab extends Block<BaseProps> {
  static className = 'Tab';
  constructor({ data, ...props }: TabProps) {
    let time;
    let formattedTime;
    if (data.lastMessage && data.lastMessage.time) {
      time = new Date(data.lastMessage.time);
      formattedTime = timeFormat(time);
    }
    const currentUser = Selectors.user();
    let who;
    if (currentUser && data.lastMessage && data.lastMessage.user) {
      who = currentUser.email === data.lastMessage.user.email ? 'Вы' : data.lastMessage.user.name;
    }

    const dataCopy = {
      ...data,
      lastMessage: data.lastMessage && time ? {
        ...data.lastMessage,
        content: data.lastMessage.content,
        time: {
          formatted: formattedTime,
          datetime: time.toISOString(),
        },
      } : null,
    };

    super({
      ...props,
      who,
      data: dataCopy,
      styles,
      onMoveToChat: async () => {
        try {
          await Thunks.getChat(data.id);
          PathRouter.go(`${Screens.Workspace.path}/${data.id}`);
        } catch (err: any) {
          informer(err.message);
        }
      },
    });
  }

  render() {
    return tabTmpl();
  }
}

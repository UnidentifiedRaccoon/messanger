import Block from '../../../utils/Core/Block';

import { ChatSettings } from '../../../utils/Api/Chats/Types';

import { Thunks } from '../../../utils/Store/Store';

import informer from '../../../utils/Core/informer';

import addChatTmpl from './AddChat.tmpl';
import * as styles from './AddChat.module.scss';

interface AddChatProps {
  staticData: Record<string, any>
}

export default class AddChat extends Block {
  static className = 'AddChat';
  constructor(props: AddChatProps) {
    super({
      ...props,
      styles,
      onSubmit: async (data: ChatSettings) => {
        try {
          await Thunks.addChat(data);
          this.destroy();
        } catch (err: any) {
          informer(err.message);
        }
      },
      onClose: () => {
        this.destroy();
      },
    });
  }

  render() {
    return addChatTmpl();
  }
}

import Block, { BaseProps } from '../../../utils/Core/Block';

import { Thunks } from '../../../utils/Store/Store';

import informer from '../../../utils/Core/informer';

import addUserToChatTmpl from './AddUserToChat.tmpl';
import styles from './AddUserToChat.module.scss';

interface AddUserToChatProps {
  staticData: Record<string, any>
}

export default class AddUserToChat extends Block<BaseProps> {
  static className = 'AddUserToChat';
  constructor(props: AddUserToChatProps) {
    super({
      ...props,
      styles,
      onSubmit: async (data: Record<string, any>) => {
        const userId: number = +data.userId;
        try {
          await Thunks.addUserToChat(userId);
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
    return addUserToChatTmpl();
  }
}

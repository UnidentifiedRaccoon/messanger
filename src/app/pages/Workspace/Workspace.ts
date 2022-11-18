import Block, { BaseProps } from '../../../utils/Core/Block';
import informer from '../../../utils/Core/informer';

import { Thunks } from '../../../utils/Store/Store';
import { withChats } from '../../../utils/Store/connect';
import { ChatTab } from '../../../utils/Api/Chats/Types';

import workspaceTmpl from './Workspace.tmpl';
import staticData from './Workspace.ru.json';
import * as styles from './Workspace.module.scss';

type WorkspaceProps = {
  chats: ChatTab[]
};

class Workspace extends Block<BaseProps> {
  constructor({ chats, ...rawProps }: WorkspaceProps) {
    super({
      ...rawProps,
      staticData,
      styles,
      chats,
    });
  }

  protected async componentDidMount() {
    try {
      await Thunks.getChats();
    } catch (err: any) {
      informer(err.message);
    }
  }

  render() {
    return workspaceTmpl();
  }
}

export default withChats(Workspace);

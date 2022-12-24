import Block, { BaseProps } from '../../../utils/Core/Block';

import PathRouter from '../../../utils/Router/PathRouter';
import { Routes } from '../../../utils/Router/Routes';

import { Selectors } from '../../../utils/Store/Store';

import requestErrorTmpl from './RequestError.tmpl';
import styles from './RequestError.module.scss';

interface RequestErrorProps {
  staticData: Record<string, any>;
}

export default class RequestError extends Block<BaseProps> {
  static className = 'RequestError';
  constructor(props: RequestErrorProps) {
    super({
      ...props,
      styles,
      authStatus: Selectors.authStatus(),
      onMoveToLogin: () => {
        PathRouter.go(Routes.Login.path);
      },
      onMoveToWorkspace: () => {
        PathRouter.go(Routes.Workspace.path);
      },
    });
  }

  render() {
    return requestErrorTmpl();
  }
}

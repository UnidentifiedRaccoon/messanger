import Block from '../../utils/Core/Block';

import requestErrorTmpl from './RequestError.tmpl';
import * as styles from './RequestError.module.scss';

interface RequestErrorProps {
  staticData: Record<string, any>;
}

export default class RequestError extends Block {
  static className = 'RequestError';
  constructor(props: RequestErrorProps) {
    super({ ...props, styles });
  }

  render() {
    return requestErrorTmpl();
  }
}

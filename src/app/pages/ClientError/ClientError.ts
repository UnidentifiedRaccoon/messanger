import Block, { BaseProps } from '../../../utils/Core/Block';

import staticData from './ClientError.ru.json';
import clientErrorTmpl from './ClientError.tmpl';

export default class ClientError extends Block<BaseProps> {
  constructor(rawProps: any) {
    super({ ...rawProps, staticData });
  }

  render() {
    return clientErrorTmpl();
  }
}

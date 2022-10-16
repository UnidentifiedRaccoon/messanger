import Block from 'utils/Block';

import staticData from './ClientError.ru.json';
import clientErrorTmpl from './ClientError.tmpl';

export default class ClientError extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, staticData });
  }

  render() {
    return clientErrorTmpl();
  }
}

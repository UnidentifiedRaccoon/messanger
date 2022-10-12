import Block from '../../utils/Block';

import clientErrorTmpl from './clientError.tmpl';

export default class ClientError extends Block {
  render() {
    return clientErrorTmpl();
  }
}

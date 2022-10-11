import Block from '../../utils/Block';

import clientErrorTmpl from './clientError.tmpl';

export default class Support extends Block {
  render() {
    return clientErrorTmpl();
  }
}

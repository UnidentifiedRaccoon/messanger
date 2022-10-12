import Block from 'utils/Block';

import staticData from './ServerError.ru.json';
import serverErrorTmpl from './ServerError.tmpl';

export default class ServerError extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, staticData });
  }

  render() {
    return serverErrorTmpl();
  }
}

import Block, { BaseProps } from '../../../utils/Core/Block';

import staticData from './ServerError.ru.json';
import serverErrorTmpl from './ServerError.tmpl';

export default class ServerError extends Block<BaseProps> {
  constructor(rawProps: any) {
    super({ ...rawProps, staticData });
  }

  render() {
    return serverErrorTmpl();
  }
}

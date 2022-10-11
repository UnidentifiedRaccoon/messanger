import Block from '../../utils/Block';

import supportTmpl from './Support.tmpl';

export default class Support extends Block {
  constructor(rawProps: any) {
    super(rawProps);
  }

  // eslint-disable-next-line class-methods-use-this
  componentDidUpdate(oldProps: any, newProps: any) {
    return false;
  }

  render() {
    return supportTmpl();
  }
}

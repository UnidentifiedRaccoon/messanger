import Block from 'utils/Block';

import iconInlineTmpl from './IconInline.tmpl';

export default class IconInline extends Block {
  static className = 'IconInline';
  render() {
    return iconInlineTmpl();
  }
}

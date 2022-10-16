import Block from 'utils/Block';

import iconInlineTmpl from './IconInline.tmpl';

type IconInlineProps = {
  outerStyles?: Record<string, string>
};

export default class IconInline extends Block {
  static className = 'IconInline';
  constructor(props: IconInlineProps) {
    super(props);
  }

  render() {
    return iconInlineTmpl();
  }
}

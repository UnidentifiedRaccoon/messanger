import Block, { BaseProps } from '../../../utils/Core/Block';

import iconInlineTmpl from './IconInline.tmpl';

type IconInlineProps = {
  outerStyles?: Record<string, string>
};

export default class IconInline extends Block<BaseProps> {
  static className = 'IconInline';
  constructor(props: IconInlineProps) {
    super(props);
  }

  render() {
    return iconInlineTmpl();
  }
}

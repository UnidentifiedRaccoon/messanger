import Block, { BaseProps } from '../../../../utils/Core/Block';

import overlayTmpl from './Overlay.tmpl';
import styles from './Overlay.module.scss';

interface OverlayProps {
  outerStyles?: Record<string, string>;
}

export default class Overlay extends Block<BaseProps> {
  static className = 'Overlay';
  constructor(props: OverlayProps) {
    super({ ...props, styles });
  }

  render() {
    return overlayTmpl();
  }
}

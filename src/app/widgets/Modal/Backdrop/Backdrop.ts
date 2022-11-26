import Block, { BaseProps } from '../../../../utils/Core/Block';

import backdropTmpl from './Backdrop.tmpl';
import styles from './Backdrop.module.scss';

interface BackdropProps {
}

export default class Backdrop extends Block<BaseProps> {
  static className = 'Backdrop';
  constructor(props: BackdropProps) {
    super({ ...props, styles });
  }

  render() {
    return backdropTmpl();
  }
}

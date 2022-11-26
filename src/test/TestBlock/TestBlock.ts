import Block, { BaseProps } from '../../utils/Core/Block';

import testBlockTmpl from './TestBlock.tmpl';
import styles from './TestBlock.module.scss';

interface TestButtonProps {
  text?: string
  innerText?: string
}

export default class TestBlock extends Block<BaseProps> {
  static className = 'TestButton';
  constructor(props: TestButtonProps) {
    super({
      ...props,
      styles,
    });
  }

  render() {
    return testBlockTmpl();
  }
}

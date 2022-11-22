import Block, { BaseProps, Events } from '../../utils/Core/Block';

import testButtonTmpl from './TestButton.tmpl';
import styles from './TestButton.module.scss';

interface TestButtonProps {
  text?: string
  onClick?: (e: Event) => void
}

export default class TestBlock extends Block<BaseProps> {
  static className = 'TestButton';
  constructor({ onClick, ...props }: TestButtonProps) {
    const events: Events = {};
    if (onClick) events.click = onClick;
    super({
      ...props,
      styles,
      events,
    });
  }

  render() {
    return testButtonTmpl();
  }
}

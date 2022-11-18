import Block, { BaseProps } from './Block';
import renderDOM from './renderDOM';

const portal = (Component: typeof Block<BaseProps>, props: any, selector: string = '#modal') => {
  const modal = new Component(props);
  renderDOM(selector, modal);
};

export default portal;

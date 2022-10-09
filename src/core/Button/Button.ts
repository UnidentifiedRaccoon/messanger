import Block from '../../utils/Block';
// import Handlebars from 'handlebars/dist/handlebars.runtime';
//
// import * as styles from './Button.module.scss';
// import template from './Button.hbs';
//
// Handlebars.registerPartial('Button', (...props) => template({ ...props[0], styles }, props[1]));

interface ButtonProps {
  label: string
}

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', props);
  }
}

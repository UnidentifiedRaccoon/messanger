import { PreparedFormData } from '../../typings/commonTypes';

import Block from '../../utils/Core/Block';

import formTmpl from './Form.tmpl';
import * as styles from './Form.module.scss';

interface FormProps {
  onSubmit: (data: Record<string, FormDataEntryValue>) => void;
  outerStyles?: Record<string, string>;
}

export default class Form extends Block {
  static className = 'Form';

  constructor({ onSubmit, ...props }: FormProps) {
    super({
      ...props,
      styles,
      events: {
        submit: (e: SubmitEvent) => {
          e.preventDefault();
          if (e.target instanceof HTMLFormElement) {
            const inputs: HTMLInputElement[] = Array.from(e.target.querySelectorAll('input'));
            const data: PreparedFormData = inputs.reduce((acc, input) => {
              input.focus();
              input.blur();
              const key = input.name as string;
              return { ...acc, [key]: input.value };
            }, {});
            onSubmit(data);
          }
        },
      },
    });
  }

  render() {
    return formTmpl();
  }
}

import { PreparedFormData } from '../../../typings/commonTypes';

import Block from '../../../utils/Core/Block';

import { isEqual } from '../../../utils/common/objectHelpers';

import formTmpl from './Form.tmpl';
import * as styles from './Form.module.scss';

interface FormProps {
  formError: string
  submitLabel:string
  onSubmit: (data: Record<string, FormDataEntryValue>) => void;
  outerStyles?: Record<string, string>;
  shouldReset?: boolean
}

export default class Form extends Block {
  static className = 'Form';

  constructor({ onSubmit, shouldReset, ...props }: FormProps) {
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
            if (shouldReset) e.target.reset();
          }
        },
      },
    });
  }

  componentDidUpdate(oldProps:any, newProps:any) {
    if (oldProps.formError !== newProps.formError && newProps.formError) {
      // ToDo popup
      return false;
    }
    return !isEqual(oldProps, newProps);
  }

  render() {
    return formTmpl();
  }
}

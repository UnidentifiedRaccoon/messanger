import Block from 'utils/Block';

import formTmpl from './Form.tmpl';
import * as styles from './Form.module.scss';

export default class Form extends Block {
  static className = 'Form';
  constructor(rawProps: any) {
    super({
      ...rawProps,
      styles,
      events: {
        submit: (e: SubmitEvent) => {
          e.preventDefault();
          if (e.target instanceof HTMLFormElement) {
            const formData = new FormData(e.target);
            const data: Record<string, FormDataEntryValue> = {};
            // eslint-disable-next-line no-restricted-syntax
            for (const [key, value] of formData) {
              data[key] = value;
            }
            rawProps.onSubmit(data);
          }
        },
      },
    });
  }

  render() {
    return formTmpl();
  }
}

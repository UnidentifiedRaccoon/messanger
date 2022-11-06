import * as styles from '../Profile.module.scss';
import { PreparedFormData, PreparedFormErrors } from '../../../typings/commonTypes';

import Block from '../../../utils/Core/Block';

import changeInfoTmpl from './ChangeInfo.tmpl';
import staticData from './ChangeInfo.ru.json';

export default class ChangeInfo extends Block {
  private errors: PreparedFormErrors;
  constructor(rawProps: any) {
    super({
      ...rawProps,
      styles,
      staticData,
      onFocus: (name: string, _: string, errorMessage: string) => {
        if (errorMessage) {
          this.errors.set(name, errorMessage);
        }
      },
      onInput: (name: string) => {
        this.errors.delete(name);
      },
      onSubmit: (data: PreparedFormData) => {
        if (this.errors.size === 0) {
          console.log(data);
        }
      },
    });
    this.errors = new Map();
  }

  render() {
    return changeInfoTmpl();
  }
}

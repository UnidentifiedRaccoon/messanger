import { numToNumeral } from '../common/time';

export enum ValidateTypes {
  Name = 'name',
  Login = 'login',
  Email = 'email',
  Password = 'password',
  Phone = 'phone',
  Message = 'message',
}

export type ValidateRule = {
  type: ValidateTypes,
  value: string
};

class Validator {
  error: string;
  value: string;
  constructor(value: string) {
    this.value = value;
    this.error = '';
  }

  notEmpty(message?: string): Validator {
    if (this.error) return this;
    if (this.value.length === 0) {
      this.error = message || 'Поле не может быть пустым';
    }
    return this;
  }

  min(n: number, message?: string): Validator {
    if (this.error) return this;
    if (!this.value || this.value.length < n) {
      const numeral = numToNumeral(n, ['знака', 'знаков', 'знаков']);
      this.error = message || `Поле должно содержать не менее ${n} ${numeral}`;
    }
    return this;
  }

  max(n: number, message?: string): Validator {
    if (this.error) return this;
    if (!this.value || this.value.length > n) {
      const numeral = numToNumeral(n, ['знака', 'знаков', 'знаков']);
      this.error = message || `Поле должно содержать не более ${n} ${numeral}`;
    }
    return this;
  }

  firstCapital(message?: string): Validator {
    if (this.error) return this;
    if (!this.value || !/[A-ZА-Я]/.test(this.value.charAt(0))) {
      this.error = message || 'Первая буква должна быть заглавной';
    }
    return this;
  }

  hasNumber(message?: string): Validator {
    if (this.error) return this;
    const regexp: RegExp = /[0-9]+/;
    if (!regexp.test(this.value)) {
      this.error = message || 'Поле должно содержать хотя бы одну цифру';
    }
    return this;
  }

  hasCapital(message?: string): Validator {
    if (this.error) return this;
    const regexp: RegExp = /[A-ZА-Я]+/;
    if (!regexp.test(this.value)) {
      this.error = message || 'Поле должно содержать хотя бы одну заглавную буквы';
    }
    return this;
  }

  commonEmail(message?: string): Validator {
    if (this.error) return this;
    const regexp: RegExp = /@[a-z]+.[a-z]+$/;
    if (!regexp.test(this.value)) {
      this.error = message || 'Адрес почты должен иметь формат @example.com';
    }
    return this;
  }

  pattern(regexp: RegExp, message: string): Validator {
    if (this.error) return this;
    if (!regexp.test(this.value)) {
      this.error = message;
    }
    return this;
  }

  notPattern(regexp: RegExp, message: string): Validator {
    if (this.error) return this;
    if (regexp.test(this.value)) {
      this.error = message;
    }
    return this;
  }
}

const validateName = (str: string): string => {
  const validator = new Validator(str)
    .firstCapital()
    .pattern(/^[a-zа-я-]+$/i, 'Только буквы и "-"');
  return validator.error;
};

const validateLogin = (str: string): string => {
  const validator = new Validator(str)
    .notPattern(/^[0-9]+$/, 'Значение не может состоять только из цифр')
    .pattern(/^[a-z-_0-9]+$/i, 'Только латиница, цифры, "-" и "_"')
    .min(3)
    .max(20);
  return validator.error;
};

const validateEmail = (str: string): string => {
  const validator = new Validator(str)
    .commonEmail()
    .pattern(/^[a-z0-9$@_.-]+$/i, 'Только латиница, цифры и "$"/"@"/"-"/"_"/"."');
  return validator.error;
};

const validatePassword = (str: string): string => {
  const validator = new Validator(str)
    .hasCapital()
    .hasNumber()
    .min(8)
    .max(40);

  return validator.error;
};

const validatePhone = (str: string): string => {
  const validator = new Validator(str)
    .pattern(/^[+]??[0-9]+$/, 'Номер должен состоять из чисел и может начитаться с "+"')
    .min(10)
    .max(15);
  return validator.error;
};

const validateMessage = (str: string): string => {
  const validator = new Validator(str)
    .notEmpty('Введите текст сообщения перед отправкой');
  return validator.error;
};

const validate = (rule: ValidateRule): string => {
  const { value, type } = rule;
  let errorMessage = '';
  switch (type) {
    case ValidateTypes.Name: {
      errorMessage = validateName(value);
      break;
    }
    case ValidateTypes.Login: {
      errorMessage = validateLogin(value);
      break;
    }
    case ValidateTypes.Email: {
      errorMessage = validateEmail(value);
      break;
    }
    case ValidateTypes.Password: {
      errorMessage = validatePassword(value);
      break;
    }
    case ValidateTypes.Phone: {
      errorMessage = validatePhone(value);
      break;
    }
    case ValidateTypes.Message: {
      errorMessage = validateMessage(value);
      break;
    }
    default: break;
  }
  return errorMessage;
};

export default validate;

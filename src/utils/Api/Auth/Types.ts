export type SignupForm = {
  email: string
  login: string
  password: string
  passwordRepeat: string
  name: string
  surname: string
  phone: string
};

export type SignupFormDTO = {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string
};

export type LoginForm = {
  login: string
  password: string
};

export type LoginFormDTO = {
  login: string
  password: string
};

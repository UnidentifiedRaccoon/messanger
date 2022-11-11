import { SignupForm, SignupFormDTO } from '../Types';

const SignupFormToSignupFormDTO = (form: SignupForm): SignupFormDTO => ({
  first_name: form.name,
  second_name: form.surname,
  login: form.login,
  email: form.email,
  password: form.password,
  phone: form.phone,
});

export default SignupFormToSignupFormDTO;

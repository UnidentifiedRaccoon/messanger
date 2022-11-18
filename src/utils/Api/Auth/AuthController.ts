import AuthApi from './AuthApi';
import { LoginForm, SignupForm } from './Types';
import SignupFormToSignupFormDTO from './Transformers/SignupFormToSignupFormDTO';

class AuthController {
  async signup(signupData: SignupForm) {
    if (signupData.password !== signupData.passwordRepeat) {
      throw new Error('Введенные пароли не совпадают');
    }
    const data = await AuthApi.signup(SignupFormToSignupFormDTO(signupData));
    const response = JSON.parse(data.response);
    if (response.reason) throw new Error(response.reason);
    if (data.status >= 200 && data.status < 400) {
      return {
        id: response.id,
      };
    }
    throw new Error(`Непредвиденная ошибка, код ошибки${data.status}. Обратитесь в службу поддержки`);
  }

  async login(loginData: LoginForm) {
    const data = await AuthApi.login(loginData);
    if (data.status >= 200 && data.status < 400) {
      return;
    }
    const response = JSON.parse(data.response);
    if (response.reason) throw new Error(response.reason);
    throw new Error(`Непредвиденная ошибка, код ошибки${data.status}. Обратитесь в службу поддержки`);
  }

  async logout() {
    const data = await AuthApi.logout();
    if (data.status >= 200 && data.status < 400) {
      return;
    }
    throw new Error(`Непредвиденная ошибка, код ошибки${data.status}. Обратитесь в службу поддержки`);
  }
}

export default new AuthController();

import { CaptchaCheckResult } from './CaptchaCheckResult';
import ApiClient from "../ApiClient";
export class LoginViewModel {
    static constructFromObject(data, obj = new LoginViewModel()) {
        if (data) {
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'string');
            }
            if (data.hasOwnProperty('rememberMe')) {
                obj['rememberMe'] = ApiClient.convertToType(data['rememberMe'], 'boolean');
            }
            if (data.hasOwnProperty('twoFactorCode')) {
                obj['twoFactorCode'] = ApiClient.convertToType(data['twoFactorCode'], 'string');
            }
            if (data.hasOwnProperty('recoveryCode')) {
                obj['recoveryCode'] = ApiClient.convertToType(data['recoveryCode'], 'string');
            }
            if (data.hasOwnProperty('client')) {
                obj['client'] = ApiClient.convertToType(data['client'], 'string');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'string');
            }
            if (data.hasOwnProperty('captchaCheckResult')) {
                obj['captchaCheckResult'] = CaptchaCheckResult.constructFromObject(data['captchaCheckResult']);
            }
        }
        return obj;
    }
}

import { CaptchaCheckResult } from './CaptchaCheckResult';
import ApiClient from "../ApiClient";
export class LoginViewModel {
    constructor(data) {
        this['password'] = data['password'];
        this['rememberMe'] = data['rememberMe'];
        this['twoFactorCode'] = data['twoFactorCode'];
        this['recoveryCode'] = data['recoveryCode'];
        this['client'] = data['client'];
        this['email'] = data['email'];
        this['captchaCheckResult'] = data['captchaCheckResult'];
    }
    static constructFromObject(data) {
        if (data) {
            return new LoginViewModel({
                'password': ApiClient.convertToType(data['password'], 'string'),
                'rememberMe': ApiClient.convertToType(data['rememberMe'], 'boolean'),
                'twoFactorCode': ApiClient.convertToType(data['twoFactorCode'], 'string'),
                'recoveryCode': ApiClient.convertToType(data['recoveryCode'], 'string'),
                'client': ApiClient.convertToType(data['client'], 'string'),
                'email': ApiClient.convertToType(data['email'], 'string'),
                'captchaCheckResult': CaptchaCheckResult.constructFromObject(data['captchaCheckResult']),
            });
        }
    }
}

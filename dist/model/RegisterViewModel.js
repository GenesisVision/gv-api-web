import { CaptchaCheckResult } from './CaptchaCheckResult';
import ApiClient from "../ApiClient";
export class RegisterViewModel {
    constructor(data) {
        this['password'] = data['password'];
        this['confirmPassword'] = data['confirmPassword'];
        this['userName'] = data['userName'];
        this['refCode'] = data['refCode'];
        this['isAuto'] = data['isAuto'];
        this['email'] = data['email'];
        this['captchaCheckResult'] = data['captchaCheckResult'];
    }
    static constructFromObject(data) {
        if (data) {
            return new RegisterViewModel({
                'password': ApiClient.convertToType(data['password'], 'string'),
                'confirmPassword': ApiClient.convertToType(data['confirmPassword'], 'string'),
                'userName': ApiClient.convertToType(data['userName'], 'string'),
                'refCode': ApiClient.convertToType(data['refCode'], 'string'),
                'isAuto': ApiClient.convertToType(data['isAuto'], 'boolean'),
                'email': ApiClient.convertToType(data['email'], 'string'),
                'captchaCheckResult': CaptchaCheckResult.constructFromObject(data['captchaCheckResult']),
            });
        }
    }
}

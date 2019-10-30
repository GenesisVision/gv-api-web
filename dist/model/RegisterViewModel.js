import { CaptchaCheckResult } from './CaptchaCheckResult';
import ApiClient from "../ApiClient";
export class RegisterViewModel {
    static constructFromObject(data, obj = new RegisterViewModel()) {
        if (data) {
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'string');
            }
            if (data.hasOwnProperty('confirmPassword')) {
                obj['confirmPassword'] = ApiClient.convertToType(data['confirmPassword'], 'string');
            }
            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'string');
            }
            if (data.hasOwnProperty('refCode')) {
                obj['refCode'] = ApiClient.convertToType(data['refCode'], 'string');
            }
            if (data.hasOwnProperty('isAuto')) {
                obj['isAuto'] = ApiClient.convertToType(data['isAuto'], 'boolean');
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

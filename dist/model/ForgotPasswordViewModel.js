import { CaptchaCheckResult } from './CaptchaCheckResult';
import ApiClient from "../ApiClient";
export class ForgotPasswordViewModel {
    static constructFromObject(data, obj = new ForgotPasswordViewModel()) {
        if (data) {
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

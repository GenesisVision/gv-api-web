import { CaptchaCheckResult } from './captchaCheckResult';
import ApiClient from "../ApiClient";
export class ResendConfirmationViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new ResendConfirmationViewModel()) {
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

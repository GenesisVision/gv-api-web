import { CaptchaCheckResult } from './CaptchaCheckResult';
import ApiClient from "../ApiClient";
export class ResendConfirmationViewModel {
    constructor(data) {
        this['email'] = data['email'];
        this['captchaCheckResult'] = data['captchaCheckResult'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ResendConfirmationViewModel({
                'email': ApiClient.convertToType(data['email'], 'string'),
                'captchaCheckResult': CaptchaCheckResult.constructFromObject(data['captchaCheckResult']),
            });
        }
    }
}

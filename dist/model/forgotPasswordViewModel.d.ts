import { CaptchaCheckResult } from './captchaCheckResult';
export declare class ForgotPasswordViewModel {
    'email': string;
    'captchaCheckResult'?: CaptchaCheckResult;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ForgotPasswordViewModel): ForgotPasswordViewModel;
}

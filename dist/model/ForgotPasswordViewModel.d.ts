import { CaptchaCheckResult } from './CaptchaCheckResult';
export declare class ForgotPasswordViewModel {
    'email': string;
    'captchaCheckResult': CaptchaCheckResult;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ForgotPasswordViewModel | undefined;
}

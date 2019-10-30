import { CaptchaCheckResult } from './CaptchaCheckResult';
export declare class ForgotPasswordViewModel {
    'email'?: string;
    'captchaCheckResult'?: CaptchaCheckResult;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ForgotPasswordViewModel): ForgotPasswordViewModel;
}

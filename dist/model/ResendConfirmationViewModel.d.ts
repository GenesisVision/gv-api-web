import { CaptchaCheckResult } from './CaptchaCheckResult';
export declare class ResendConfirmationViewModel {
    'email'?: string;
    'captchaCheckResult'?: CaptchaCheckResult;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ResendConfirmationViewModel): ResendConfirmationViewModel;
}

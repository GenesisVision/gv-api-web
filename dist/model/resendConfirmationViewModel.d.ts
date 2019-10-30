import { CaptchaCheckResult } from './captchaCheckResult';
export declare class ResendConfirmationViewModel {
    'email': string;
    'captchaCheckResult'?: CaptchaCheckResult;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ResendConfirmationViewModel): ResendConfirmationViewModel;
}

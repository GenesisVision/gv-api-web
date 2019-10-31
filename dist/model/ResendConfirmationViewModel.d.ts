import { CaptchaCheckResult } from './CaptchaCheckResult';
export declare class ResendConfirmationViewModel {
    'email': string;
    'captchaCheckResult': CaptchaCheckResult;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ResendConfirmationViewModel | undefined;
}

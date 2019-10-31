import { CaptchaCheckResult } from './CaptchaCheckResult';
export declare class RegisterViewModel {
    'password': string;
    'confirmPassword': string;
    'userName': string;
    'refCode': string;
    'isAuto': boolean;
    'email': string;
    'captchaCheckResult': CaptchaCheckResult;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): RegisterViewModel | undefined;
}

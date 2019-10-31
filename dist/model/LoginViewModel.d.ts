import { CaptchaCheckResult } from './CaptchaCheckResult';
export declare class LoginViewModel {
    'password': string;
    'rememberMe': boolean;
    'twoFactorCode': string;
    'recoveryCode': string;
    'client': string;
    'email': string;
    'captchaCheckResult': CaptchaCheckResult;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): LoginViewModel;
}

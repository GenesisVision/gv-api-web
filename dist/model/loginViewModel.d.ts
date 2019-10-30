import { CaptchaCheckResult } from './captchaCheckResult';
export declare class LoginViewModel {
    'password': string;
    'rememberMe'?: boolean;
    'twoFactorCode'?: string;
    'recoveryCode'?: string;
    'client'?: string;
    'email': string;
    'captchaCheckResult'?: CaptchaCheckResult;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: LoginViewModel): LoginViewModel;
}

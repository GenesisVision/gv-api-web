import { CaptchaCheckResult } from './CaptchaCheckResult';
export declare class LoginViewModel {
    'password'?: string;
    'rememberMe'?: boolean;
    'twoFactorCode'?: string;
    'recoveryCode'?: string;
    'client'?: string;
    'email'?: string;
    'captchaCheckResult'?: CaptchaCheckResult;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: LoginViewModel): LoginViewModel;
}

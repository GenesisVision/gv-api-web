import { CaptchaCheckResult } from './CaptchaCheckResult';
export declare class RegisterViewModel {
    'password'?: string;
    'confirmPassword'?: string;
    'userName'?: string;
    'refCode'?: string;
    'isAuto'?: boolean;
    'email'?: string;
    'captchaCheckResult'?: CaptchaCheckResult;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: RegisterViewModel): RegisterViewModel;
}

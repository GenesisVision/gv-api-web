import { CaptchaCheckResult } from './CaptchaCheckResult';

export interface RegisterViewModel {
    password: string;
    confirmPassword: string;
    userName: string;
    refCode: string;
    utmSource: string;
    isAuto: boolean;
    email: string;
    captchaCheckResult: CaptchaCheckResult;
}


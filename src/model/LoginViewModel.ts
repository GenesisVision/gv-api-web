import { CaptchaCheckResult } from './CaptchaCheckResult';

export interface LoginViewModel {
    password: string;
    rememberMe: boolean;
    twoFactorCode: string;
    recoveryCode: string;
    client: string;
    email: string;
    captchaCheckResult: CaptchaCheckResult;
}


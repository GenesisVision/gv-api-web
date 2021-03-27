import { CaptchaCheckResult } from './CaptchaCheckResult';

export interface LoginViewModel {
    email: string;
    captchaCheckResult: CaptchaCheckResult;
    password: string;
    rememberMe: boolean;
    twoFactorCode: string;
    recoveryCode: string;
    client: string;
}


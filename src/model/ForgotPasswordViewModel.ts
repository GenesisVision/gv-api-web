import { CaptchaCheckResult } from './CaptchaCheckResult';

export interface ForgotPasswordViewModel {
    email: string;
    captchaCheckResult: CaptchaCheckResult;
}


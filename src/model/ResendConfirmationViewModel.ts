import { CaptchaCheckResult } from './CaptchaCheckResult';

export interface ResendConfirmationViewModel {
    email: string;
    captchaCheckResult: CaptchaCheckResult;
}


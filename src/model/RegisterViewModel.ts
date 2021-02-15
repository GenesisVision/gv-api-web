import { CaptchaCheckResult } from './CaptchaCheckResult';
import { UtmSource } from './UtmSource';

export interface RegisterViewModel {
    email: string;
    captchaCheckResult: CaptchaCheckResult;
    password: string;
    confirmPassword: string;
    userName: string;
    refCode: string;
    isAuto: boolean;
    utmSource: UtmSource;
}


import { CaptchaCheckResult } from './CaptchaCheckResult';
import { UtmSource } from './UtmSource';

export interface RegisterViewModel {
    password: string;
    confirmPassword: string;
    userName: string;
    refCode: string;
    isAuto: boolean;
    utmSource: UtmSource;
    email: string;
    captchaCheckResult: CaptchaCheckResult;
}


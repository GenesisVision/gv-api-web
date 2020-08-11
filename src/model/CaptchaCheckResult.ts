import { GeeTestResult } from './GeeTestResult';
import { PowResult } from './PowResult';

export interface CaptchaCheckResult {
    id: string;
    pow: PowResult;
    geeTest: GeeTestResult;
}


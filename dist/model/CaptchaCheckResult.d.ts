import { GeeTestResult } from './GeeTestResult';
import { PowResult } from './PowResult';
export declare class CaptchaCheckResult {
    'id'?: string;
    'pow'?: PowResult;
    'geeTest'?: GeeTestResult;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: CaptchaCheckResult): CaptchaCheckResult;
}

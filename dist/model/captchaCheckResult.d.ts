import { GeeTestResult } from './geeTestResult';
import { PowResult } from './powResult';
export declare class CaptchaCheckResult {
    'id'?: string;
    'pow'?: PowResult;
    'geeTest'?: GeeTestResult;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: CaptchaCheckResult): CaptchaCheckResult;
}

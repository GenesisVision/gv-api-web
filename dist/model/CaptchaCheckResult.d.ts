import { GeeTestResult } from './GeeTestResult';
import { PowResult } from './PowResult';
export declare class CaptchaCheckResult {
    'id': string;
    'pow': PowResult;
    'geeTest': GeeTestResult;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): CaptchaCheckResult | undefined;
}

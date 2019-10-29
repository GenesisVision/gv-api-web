import { CaptchaType } from './captchaType';
import { GeeTestDetails } from './geeTestDetails';
import { PowDetails } from './powDetails';
export declare class CaptchaDetails {
    'captchaType'?: CaptchaType;
    'id'?: string;
    'route'?: string;
    'pow'?: PowDetails;
    'geeTest'?: GeeTestDetails;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: CaptchaDetails): CaptchaDetails;
}

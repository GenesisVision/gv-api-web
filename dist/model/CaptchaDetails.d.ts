import { CaptchaType } from './CaptchaType';
import { GeeTestDetails } from './GeeTestDetails';
import { PowDetails } from './PowDetails';
export declare class CaptchaDetails {
    'captchaType'?: CaptchaType;
    'id'?: string;
    'route'?: string;
    'pow'?: PowDetails;
    'geeTest'?: GeeTestDetails;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: CaptchaDetails): CaptchaDetails;
}

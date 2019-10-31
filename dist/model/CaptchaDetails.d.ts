import { CaptchaType } from './CaptchaType';
import { GeeTestDetails } from './GeeTestDetails';
import { PowDetails } from './PowDetails';
export declare class CaptchaDetails {
    'captchaType': CaptchaType;
    'id': string;
    'route': string;
    'pow': PowDetails;
    'geeTest': GeeTestDetails;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): CaptchaDetails | undefined;
}

import { CaptchaType } from './CaptchaType';
import { GeeTestDetails } from './GeeTestDetails';
import { PowDetails } from './PowDetails';

export interface CaptchaDetails {
    captchaType: CaptchaType;
    id: string;
    route: string;
    pow: PowDetails;
    geeTest: GeeTestDetails;
}


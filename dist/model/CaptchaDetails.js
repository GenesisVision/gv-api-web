import { CaptchaType } from './CaptchaType';
import { GeeTestDetails } from './GeeTestDetails';
import { PowDetails } from './PowDetails';
import ApiClient from "../ApiClient";
export class CaptchaDetails {
    constructor(data) {
        this['captchaType'] = data['captchaType'];
        this['id'] = data['id'];
        this['route'] = data['route'];
        this['pow'] = data['pow'];
        this['geeTest'] = data['geeTest'];
    }
    static constructFromObject(data) {
        return new CaptchaDetails({
            'captchaType': CaptchaType.constructFromObject(data['captchaType']),
            'id': ApiClient.convertToType(data['id'], 'string'),
            'route': ApiClient.convertToType(data['route'], 'string'),
            'pow': PowDetails.constructFromObject(data['pow']),
            'geeTest': GeeTestDetails.constructFromObject(data['geeTest']),
        });
    }
}

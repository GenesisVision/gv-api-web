import { CaptchaType } from './CaptchaType';
import { GeeTestDetails } from './GeeTestDetails';
import { PowDetails } from './PowDetails';
import ApiClient from "../ApiClient";
export class CaptchaDetails {
    static constructFromObject(data, obj = new CaptchaDetails()) {
        if (data) {
            if (data.hasOwnProperty('captchaType')) {
                obj['captchaType'] = CaptchaType.constructFromObject(data['captchaType']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('route')) {
                obj['route'] = ApiClient.convertToType(data['route'], 'string');
            }
            if (data.hasOwnProperty('pow')) {
                obj['pow'] = PowDetails.constructFromObject(data['pow']);
            }
            if (data.hasOwnProperty('geeTest')) {
                obj['geeTest'] = GeeTestDetails.constructFromObject(data['geeTest']);
            }
        }
        return obj;
    }
}

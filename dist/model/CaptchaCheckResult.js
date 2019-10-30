import { GeeTestResult } from './GeeTestResult';
import { PowResult } from './PowResult';
import ApiClient from "../ApiClient";
export class CaptchaCheckResult {
    static constructFromObject(data, obj = new CaptchaCheckResult()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('pow')) {
                obj['pow'] = PowResult.constructFromObject(data['pow']);
            }
            if (data.hasOwnProperty('geeTest')) {
                obj['geeTest'] = GeeTestResult.constructFromObject(data['geeTest']);
            }
        }
        return obj;
    }
}

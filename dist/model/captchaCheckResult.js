import { GeeTestResult } from './geeTestResult';
import { PowResult } from './powResult';
import ApiClient from "../ApiClient";
export class CaptchaCheckResult {
    constructor() {
    }
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

import { GeeTestResult } from './GeeTestResult';
import { PowResult } from './PowResult';
import ApiClient from "../ApiClient";
export class CaptchaCheckResult {
    constructor(data) {
        this['id'] = data['id'];
        this['pow'] = data['pow'];
        this['geeTest'] = data['geeTest'];
    }
    static constructFromObject(data) {
        if (data) {
            return new CaptchaCheckResult({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'pow': PowResult.constructFromObject(data['pow']),
                'geeTest': GeeTestResult.constructFromObject(data['geeTest']),
            });
        }
    }
}

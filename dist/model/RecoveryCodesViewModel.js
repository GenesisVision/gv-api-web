import { RecoveryCode } from './RecoveryCode';
import ApiClient from "../ApiClient";
export class RecoveryCodesViewModel {
    constructor(data) {
        this['codes'] = data['codes'];
        this['authToken'] = data['authToken'];
    }
    static constructFromObject(data) {
        if (data) {
            return new RecoveryCodesViewModel({
                'codes': ApiClient.convertToType(data['codes'], [RecoveryCode]),
                'authToken': ApiClient.convertToType(data['authToken'], 'string'),
            });
        }
    }
}

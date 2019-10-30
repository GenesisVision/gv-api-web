import { RecoveryCode } from './RecoveryCode';
import ApiClient from "../ApiClient";
export class RecoveryCodesViewModel {
    static constructFromObject(data, obj = new RecoveryCodesViewModel()) {
        if (data) {
            if (data.hasOwnProperty('codes')) {
                obj['codes'] = ApiClient.convertToType(data['codes'], [RecoveryCode]);
            }
            if (data.hasOwnProperty('authToken')) {
                obj['authToken'] = ApiClient.convertToType(data['authToken'], 'string');
            }
        }
        return obj;
    }
}

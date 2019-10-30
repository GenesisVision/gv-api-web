import { TwoFactorAuthenticator } from './TwoFactorAuthenticator';
import ApiClient from "../ApiClient";
export class ProgramCreateResult {
    static constructFromObject(data, obj = new ProgramCreateResult()) {
        if (data) {
            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'string');
            }
            if (data.hasOwnProperty('twoFactorRequired')) {
                obj['twoFactorRequired'] = ApiClient.convertToType(data['twoFactorRequired'], 'boolean');
            }
            if (data.hasOwnProperty('twoFactor')) {
                obj['twoFactor'] = TwoFactorAuthenticator.constructFromObject(data['twoFactor']);
            }
        }
        return obj;
    }
}

import { TwoFactorAuthenticator } from './TwoFactorAuthenticator';
import ApiClient from "../ApiClient";
export class ProgramCreateResult {
    constructor(data) {
        this['programId'] = data['programId'];
        this['twoFactorRequired'] = data['twoFactorRequired'];
        this['twoFactor'] = data['twoFactor'];
    }
    static constructFromObject(data) {
        return new ProgramCreateResult({
            'programId': ApiClient.convertToType(data['programId'], 'string'),
            'twoFactorRequired': ApiClient.convertToType(data['twoFactorRequired'], 'boolean'),
            'twoFactor': TwoFactorAuthenticator.constructFromObject(data['twoFactor']),
        });
    }
}

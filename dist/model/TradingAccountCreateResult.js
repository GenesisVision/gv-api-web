import { TwoFactorAuthenticator } from './TwoFactorAuthenticator';
import ApiClient from "../ApiClient";
export class TradingAccountCreateResult {
    constructor(data) {
        this['id'] = data['id'];
        this['twoFactorRequired'] = data['twoFactorRequired'];
        this['twoFactor'] = data['twoFactor'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TradingAccountCreateResult({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'twoFactorRequired': ApiClient.convertToType(data['twoFactorRequired'], 'boolean'),
                'twoFactor': TwoFactorAuthenticator.constructFromObject(data['twoFactor']),
            });
        }
    }
}

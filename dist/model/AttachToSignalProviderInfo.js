import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class AttachToSignalProviderInfo {
    constructor(data) {
        this['hasSignalAccount'] = data['hasSignalAccount'];
        this['hasActiveSubscription'] = data['hasActiveSubscription'];
        this['volumeFee'] = data['volumeFee'];
        this['minDeposit'] = data['minDeposit'];
        this['minDepositCurrency'] = data['minDepositCurrency'];
    }
    static constructFromObject(data) {
        return new AttachToSignalProviderInfo({
            'hasSignalAccount': ApiClient.convertToType(data['hasSignalAccount'], 'boolean'),
            'hasActiveSubscription': ApiClient.convertToType(data['hasActiveSubscription'], 'boolean'),
            'volumeFee': ApiClient.convertToType(data['volumeFee'], 'number'),
            'minDeposit': ApiClient.convertToType(data['minDeposit'], 'number'),
            'minDepositCurrency': Currency.constructFromObject(data['minDepositCurrency']),
        });
    }
}

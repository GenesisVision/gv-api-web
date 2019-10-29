import { Currency } from './currency';
import ApiClient from "../ApiClient";
export class AttachToSignalProviderInfo {
    constructor() {
    }
    static constructFromObject(data, obj = new AttachToSignalProviderInfo()) {
        if (data) {
            if (data.hasOwnProperty('hasSignalAccount')) {
                obj['hasSignalAccount'] = ApiClient.convertToType(data['hasSignalAccount'], 'boolean');
            }
            if (data.hasOwnProperty('hasActiveSubscription')) {
                obj['hasActiveSubscription'] = ApiClient.convertToType(data['hasActiveSubscription'], 'boolean');
            }
            if (data.hasOwnProperty('volumeFee')) {
                obj['volumeFee'] = ApiClient.convertToType(data['volumeFee'], 'number');
            }
            if (data.hasOwnProperty('minDeposit')) {
                obj['minDeposit'] = ApiClient.convertToType(data['minDeposit'], 'number');
            }
            if (data.hasOwnProperty('minDepositCurrency')) {
                obj['minDepositCurrency'] = Currency.constructFromObject(data['minDepositCurrency']);
            }
        }
        return obj;
    }
}

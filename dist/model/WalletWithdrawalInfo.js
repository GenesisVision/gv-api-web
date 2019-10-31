import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class WalletWithdrawalInfo {
    constructor(data) {
        this['currency'] = data['currency'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
        this['commission'] = data['commission'];
        this['rateToGvt'] = data['rateToGvt'];
        this['availableToWithdrawal'] = data['availableToWithdrawal'];
    }
    static constructFromObject(data) {
        return new WalletWithdrawalInfo({
            'currency': Currency.constructFromObject(data['currency']),
            'description': ApiClient.convertToType(data['description'], 'string'),
            'logo': ApiClient.convertToType(data['logo'], 'string'),
            'commission': ApiClient.convertToType(data['commission'], 'number'),
            'rateToGvt': ApiClient.convertToType(data['rateToGvt'], 'number'),
            'availableToWithdrawal': ApiClient.convertToType(data['availableToWithdrawal'], 'number'),
        });
    }
}

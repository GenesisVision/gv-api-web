import { Currency } from './currency';
import ApiClient from "../ApiClient";
export class WalletData {
    constructor() {
    }
    static constructFromObject(data, obj = new WalletData()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
            if (data.hasOwnProperty('rateToGVT')) {
                obj['rateToGVT'] = ApiClient.convertToType(data['rateToGVT'], 'number');
            }
            if (data.hasOwnProperty('isDepositEnabled')) {
                obj['isDepositEnabled'] = ApiClient.convertToType(data['isDepositEnabled'], 'boolean');
            }
            if (data.hasOwnProperty('isWithdrawalEnabled')) {
                obj['isWithdrawalEnabled'] = ApiClient.convertToType(data['isWithdrawalEnabled'], 'boolean');
            }
            if (data.hasOwnProperty('withdrawalCommission')) {
                obj['withdrawalCommission'] = ApiClient.convertToType(data['withdrawalCommission'], 'number');
            }
            if (data.hasOwnProperty('depositAddress')) {
                obj['depositAddress'] = ApiClient.convertToType(data['depositAddress'], 'string');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'number');
            }
            if (data.hasOwnProperty('invested')) {
                obj['invested'] = ApiClient.convertToType(data['invested'], 'number');
            }
            if (data.hasOwnProperty('pending')) {
                obj['pending'] = ApiClient.convertToType(data['pending'], 'number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
            if (data.hasOwnProperty('currencyCcy')) {
                obj['currencyCcy'] = Currency.constructFromObject(data['currencyCcy']);
            }
            if (data.hasOwnProperty('availableCcy')) {
                obj['availableCcy'] = ApiClient.convertToType(data['availableCcy'], 'number');
            }
            if (data.hasOwnProperty('investedCcy')) {
                obj['investedCcy'] = ApiClient.convertToType(data['investedCcy'], 'number');
            }
            if (data.hasOwnProperty('pendingCcy')) {
                obj['pendingCcy'] = ApiClient.convertToType(data['pendingCcy'], 'number');
            }
            if (data.hasOwnProperty('totalCcy')) {
                obj['totalCcy'] = ApiClient.convertToType(data['totalCcy'], 'number');
            }
        }
        return obj;
    }
}

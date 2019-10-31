import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class WalletData {
    constructor(data) {
        this['id'] = data['id'];
        this['title'] = data['title'];
        this['logo'] = data['logo'];
        this['rateToGVT'] = data['rateToGVT'];
        this['isDepositEnabled'] = data['isDepositEnabled'];
        this['isWithdrawalEnabled'] = data['isWithdrawalEnabled'];
        this['withdrawalCommission'] = data['withdrawalCommission'];
        this['depositAddress'] = data['depositAddress'];
        this['currency'] = data['currency'];
        this['available'] = data['available'];
        this['invested'] = data['invested'];
        this['pending'] = data['pending'];
        this['total'] = data['total'];
        this['currencyCcy'] = data['currencyCcy'];
        this['availableCcy'] = data['availableCcy'];
        this['investedCcy'] = data['investedCcy'];
        this['pendingCcy'] = data['pendingCcy'];
        this['totalCcy'] = data['totalCcy'];
    }
    static constructFromObject(data) {
        return new WalletData({
            'id': ApiClient.convertToType(data['id'], 'string'),
            'title': ApiClient.convertToType(data['title'], 'string'),
            'logo': ApiClient.convertToType(data['logo'], 'string'),
            'rateToGVT': ApiClient.convertToType(data['rateToGVT'], 'number'),
            'isDepositEnabled': ApiClient.convertToType(data['isDepositEnabled'], 'boolean'),
            'isWithdrawalEnabled': ApiClient.convertToType(data['isWithdrawalEnabled'], 'boolean'),
            'withdrawalCommission': ApiClient.convertToType(data['withdrawalCommission'], 'number'),
            'depositAddress': ApiClient.convertToType(data['depositAddress'], 'string'),
            'currency': Currency.constructFromObject(data['currency']),
            'available': ApiClient.convertToType(data['available'], 'number'),
            'invested': ApiClient.convertToType(data['invested'], 'number'),
            'pending': ApiClient.convertToType(data['pending'], 'number'),
            'total': ApiClient.convertToType(data['total'], 'number'),
            'currencyCcy': Currency.constructFromObject(data['currencyCcy']),
            'availableCcy': ApiClient.convertToType(data['availableCcy'], 'number'),
            'investedCcy': ApiClient.convertToType(data['investedCcy'], 'number'),
            'pendingCcy': ApiClient.convertToType(data['pendingCcy'], 'number'),
            'totalCcy': ApiClient.convertToType(data['totalCcy'], 'number'),
        });
    }
}

import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class WalletData {
    constructor(data) {
        this['pending'] = data['pending'];
        this['id'] = data['id'];
        this['title'] = data['title'];
        this['logo'] = data['logo'];
        this['isDepositEnabled'] = data['isDepositEnabled'];
        this['isWithdrawalEnabled'] = data['isWithdrawalEnabled'];
        this['withdrawalCommission'] = data['withdrawalCommission'];
        this['depositAddress'] = data['depositAddress'];
        this['total'] = data['total'];
        this['currency'] = data['currency'];
        this['available'] = data['available'];
        this['invested'] = data['invested'];
        this['trading'] = data['trading'];
    }
    static constructFromObject(data) {
        if (data) {
            return new WalletData({
                'pending': ApiClient.convertToType(data['pending'], 'number'),
                'id': ApiClient.convertToType(data['id'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'isDepositEnabled': ApiClient.convertToType(data['isDepositEnabled'], 'boolean'),
                'isWithdrawalEnabled': ApiClient.convertToType(data['isWithdrawalEnabled'], 'boolean'),
                'withdrawalCommission': ApiClient.convertToType(data['withdrawalCommission'], 'number'),
                'depositAddress': ApiClient.convertToType(data['depositAddress'], 'string'),
                'total': ApiClient.convertToType(data['total'], 'number'),
                'currency': Currency.constructFromObject(data['currency']),
                'available': ApiClient.convertToType(data['available'], 'number'),
                'invested': ApiClient.convertToType(data['invested'], 'number'),
                'trading': ApiClient.convertToType(data['trading'], 'number'),
            });
        }
    }
}

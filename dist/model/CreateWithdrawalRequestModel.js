import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class CreateWithdrawalRequestModel {
    constructor(data) {
        this['amount'] = data['amount'];
        this['currency'] = data['currency'];
        this['address'] = data['address'];
        this['twoFactorCode'] = data['twoFactorCode'];
    }
    static constructFromObject(data) {
        if (data) {
            return new CreateWithdrawalRequestModel({
                'amount': ApiClient.convertToType(data['amount'], 'number'),
                'currency': Currency.constructFromObject(data['currency']),
                'address': ApiClient.convertToType(data['address'], 'string'),
                'twoFactorCode': ApiClient.convertToType(data['twoFactorCode'], 'string'),
            });
        }
    }
}

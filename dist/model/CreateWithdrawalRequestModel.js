import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class CreateWithdrawalRequestModel {
    static constructFromObject(data, obj = new CreateWithdrawalRequestModel()) {
        if (data) {
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'string');
            }
            if (data.hasOwnProperty('twoFactorCode')) {
                obj['twoFactorCode'] = ApiClient.convertToType(data['twoFactorCode'], 'string');
            }
        }
        return obj;
    }
}

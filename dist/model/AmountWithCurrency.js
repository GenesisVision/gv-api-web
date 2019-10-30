import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class AmountWithCurrency {
    static constructFromObject(data, obj = new AmountWithCurrency()) {
        if (data) {
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
        }
        return obj;
    }
}

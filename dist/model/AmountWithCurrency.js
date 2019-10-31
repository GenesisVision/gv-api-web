import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class AmountWithCurrency {
    constructor(data) {
        this['amount'] = data['amount'];
        this['currency'] = data['currency'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AmountWithCurrency({
                'amount': ApiClient.convertToType(data['amount'], 'number'),
                'currency': Currency.constructFromObject(data['currency']),
            });
        }
    }
}

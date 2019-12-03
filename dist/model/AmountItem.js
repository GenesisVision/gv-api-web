import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class AmountItem {
    constructor(data) {
        this['amount'] = data['amount'];
        this['currency'] = data['currency'];
        this['color'] = data['color'];
        this['logo'] = data['logo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AmountItem({
                'amount': ApiClient.convertToType(data['amount'], 'number'),
                'currency': Currency.constructFromObject(data['currency']),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
            });
        }
    }
}

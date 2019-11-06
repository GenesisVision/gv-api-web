import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class CurrencyItem {
    constructor(data) {
        this['title'] = data['title'];
        this['logo'] = data['logo'];
        this['currency'] = data['currency'];
    }
    static constructFromObject(data) {
        if (data) {
            return new CurrencyItem({
                'title': ApiClient.convertToType(data['title'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'currency': Currency.constructFromObject(data['currency']),
            });
        }
    }
}

import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class CurrencyItem {
    constructor(data) {
        this['logo'] = data['logo'];
        this['currency'] = data['currency'];
        this['title'] = data['title'];
    }
    static constructFromObject(data) {
        if (data) {
            return new CurrencyItem({
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'currency': Currency.constructFromObject(data['currency']),
                'title': ApiClient.convertToType(data['title'], 'string'),
            });
        }
    }
}

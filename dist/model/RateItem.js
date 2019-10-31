import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class RateItem {
    constructor(data) {
        this['currency'] = data['currency'];
        this['rate'] = data['rate'];
    }
    static constructFromObject(data) {
        if (data) {
            return new RateItem({
                'currency': Currency.constructFromObject(data['currency']),
                'rate': ApiClient.convertToType(data['rate'], 'number'),
            });
        }
    }
}

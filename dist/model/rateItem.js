import { Currency } from './currency';
import ApiClient from "../ApiClient";
export class RateItem {
    constructor() {
    }
    static constructFromObject(data, obj = new RateItem()) {
        if (data) {
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'number');
            }
        }
        return obj;
    }
}

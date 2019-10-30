import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class RewardDetails {
    static constructFromObject(data, obj = new RewardDetails()) {
        if (data) {
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'number');
            }
        }
        return obj;
    }
}

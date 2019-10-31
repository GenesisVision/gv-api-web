import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class RewardDetails {
    constructor(data) {
        this['date'] = data['date'];
        this['currency'] = data['currency'];
        this['amount'] = data['amount'];
    }
    static constructFromObject(data) {
        if (data) {
            return new RewardDetails({
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'currency': Currency.constructFromObject(data['currency']),
                'amount': ApiClient.convertToType(data['amount'], 'number'),
            });
        }
    }
}

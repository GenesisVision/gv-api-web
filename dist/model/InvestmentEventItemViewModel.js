import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class InvestmentEventItemViewModel {
    static constructFromObject(data, obj = new InvestmentEventItemViewModel()) {
        if (data) {
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
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

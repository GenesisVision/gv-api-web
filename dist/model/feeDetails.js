import { Currency } from './currency';
import { FeeType } from './feeType';
import ApiClient from "../ApiClient";
export class FeeDetails {
    constructor() {
    }
    static constructFromObject(data, obj = new FeeDetails()) {
        if (data) {
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'string');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = FeeType.constructFromObject(data['type']);
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

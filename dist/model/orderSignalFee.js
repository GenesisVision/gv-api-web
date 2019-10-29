import { Currency } from './currency';
import { FeeType } from './feeType';
import ApiClient from "../ApiClient";
export class OrderSignalFee {
    constructor() {
    }
    static constructFromObject(data, obj = new OrderSignalFee()) {
        if (data) {
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = FeeType.constructFromObject(data['type']);
            }
        }
        return obj;
    }
}

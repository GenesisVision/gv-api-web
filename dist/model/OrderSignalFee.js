import { Currency } from './Currency';
import { FeeType } from './FeeType';
import ApiClient from "../ApiClient";
export class OrderSignalFee {
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

import { Currency } from './Currency';
import { FeeType } from './FeeType';
import ApiClient from "../ApiClient";
export class OrderSignalFee {
    constructor(data) {
        this['amount'] = data['amount'];
        this['currency'] = data['currency'];
        this['type'] = data['type'];
    }
    static constructFromObject(data) {
        return new OrderSignalFee({
            'amount': ApiClient.convertToType(data['amount'], 'number'),
            'currency': Currency.constructFromObject(data['currency']),
            'type': FeeType.constructFromObject(data['type']),
        });
    }
}

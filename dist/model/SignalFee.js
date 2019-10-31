import { Currency } from './Currency';
import { FeeType } from './FeeType';
import ApiClient from "../ApiClient";
export class SignalFee {
    constructor(data) {
        this['title'] = data['title'];
        this['type'] = data['type'];
        this['value'] = data['value'];
        this['currency'] = data['currency'];
    }
    static constructFromObject(data) {
        return new SignalFee({
            'title': ApiClient.convertToType(data['title'], 'string'),
            'type': FeeType.constructFromObject(data['type']),
            'value': ApiClient.convertToType(data['value'], 'number'),
            'currency': Currency.constructFromObject(data['currency']),
        });
    }
}

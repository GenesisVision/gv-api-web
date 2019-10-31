import { Currency } from './Currency';
import { FeeType } from './FeeType';
import ApiClient from "../ApiClient";
export class FeeDetails {
    constructor(data) {
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['type'] = data['type'];
        this['amount'] = data['amount'];
        this['currency'] = data['currency'];
    }
    static constructFromObject(data) {
        return new FeeDetails({
            'title': ApiClient.convertToType(data['title'], 'string'),
            'description': ApiClient.convertToType(data['description'], 'string'),
            'type': FeeType.constructFromObject(data['type']),
            'amount': ApiClient.convertToType(data['amount'], 'number'),
            'currency': Currency.constructFromObject(data['currency']),
        });
    }
}

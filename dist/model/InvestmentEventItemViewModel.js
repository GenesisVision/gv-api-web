import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class InvestmentEventItemViewModel {
    constructor(data) {
        this['title'] = data['title'];
        this['amount'] = data['amount'];
        this['currency'] = data['currency'];
    }
    static constructFromObject(data) {
        return new InvestmentEventItemViewModel({
            'title': ApiClient.convertToType(data['title'], 'string'),
            'amount': ApiClient.convertToType(data['amount'], 'number'),
            'currency': Currency.constructFromObject(data['currency']),
        });
    }
}

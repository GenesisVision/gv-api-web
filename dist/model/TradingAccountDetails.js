import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class TradingAccountDetails {
    constructor(data) {
        this['id'] = data['id'];
        this['currency'] = data['currency'];
        this['login'] = data['login'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TradingAccountDetails({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'currency': Currency.constructFromObject(data['currency']),
                'login': ApiClient.convertToType(data['login'], 'string'),
            });
        }
    }
}

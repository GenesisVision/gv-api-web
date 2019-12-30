import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class WalletBaseData {
    constructor(data) {
        this['id'] = data['id'];
        this['title'] = data['title'];
        this['logo'] = data['logo'];
        this['currency'] = data['currency'];
        this['available'] = data['available'];
        this['rate'] = data['rate'];
    }
    static constructFromObject(data) {
        if (data) {
            return new WalletBaseData({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'currency': Currency.constructFromObject(data['currency']),
                'available': ApiClient.convertToType(data['available'], 'number'),
                'rate': ApiClient.convertToType(data['rate'], 'number'),
            });
        }
    }
}

import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class WalletsGrandTotal {
    constructor(data) {
        this['currency'] = data['currency'];
        this['available'] = data['available'];
        this['invested'] = data['invested'];
        this['trading'] = data['trading'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new WalletsGrandTotal({
                'currency': Currency.constructFromObject(data['currency']),
                'available': ApiClient.convertToType(data['available'], 'number'),
                'invested': ApiClient.convertToType(data['invested'], 'number'),
                'trading': ApiClient.convertToType(data['trading'], 'number'),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}

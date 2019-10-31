import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class WalletsGrandTotal {
    constructor(data) {
        this['currency'] = data['currency'];
        this['available'] = data['available'];
        this['invested'] = data['invested'];
        this['pending'] = data['pending'];
        this['total'] = data['total'];
        this['currencyCcy'] = data['currencyCcy'];
        this['availableCcy'] = data['availableCcy'];
        this['investedCcy'] = data['investedCcy'];
        this['pendingCcy'] = data['pendingCcy'];
        this['totalCcy'] = data['totalCcy'];
    }
    static constructFromObject(data) {
        return new WalletsGrandTotal({
            'currency': Currency.constructFromObject(data['currency']),
            'available': ApiClient.convertToType(data['available'], 'number'),
            'invested': ApiClient.convertToType(data['invested'], 'number'),
            'pending': ApiClient.convertToType(data['pending'], 'number'),
            'total': ApiClient.convertToType(data['total'], 'number'),
            'currencyCcy': Currency.constructFromObject(data['currencyCcy']),
            'availableCcy': ApiClient.convertToType(data['availableCcy'], 'number'),
            'investedCcy': ApiClient.convertToType(data['investedCcy'], 'number'),
            'pendingCcy': ApiClient.convertToType(data['pendingCcy'], 'number'),
            'totalCcy': ApiClient.convertToType(data['totalCcy'], 'number'),
        });
    }
}

import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class WalletsGrandTotal {
    static constructFromObject(data, obj = new WalletsGrandTotal()) {
        if (data) {
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'number');
            }
            if (data.hasOwnProperty('invested')) {
                obj['invested'] = ApiClient.convertToType(data['invested'], 'number');
            }
            if (data.hasOwnProperty('pending')) {
                obj['pending'] = ApiClient.convertToType(data['pending'], 'number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
            if (data.hasOwnProperty('currencyCcy')) {
                obj['currencyCcy'] = Currency.constructFromObject(data['currencyCcy']);
            }
            if (data.hasOwnProperty('availableCcy')) {
                obj['availableCcy'] = ApiClient.convertToType(data['availableCcy'], 'number');
            }
            if (data.hasOwnProperty('investedCcy')) {
                obj['investedCcy'] = ApiClient.convertToType(data['investedCcy'], 'number');
            }
            if (data.hasOwnProperty('pendingCcy')) {
                obj['pendingCcy'] = ApiClient.convertToType(data['pendingCcy'], 'number');
            }
            if (data.hasOwnProperty('totalCcy')) {
                obj['totalCcy'] = ApiClient.convertToType(data['totalCcy'], 'number');
            }
        }
        return obj;
    }
}

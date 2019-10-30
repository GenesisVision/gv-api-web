import { OrderSignalModel } from './orderSignalModel';
import ApiClient from "../ApiClient";
export class TradesSignalViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new TradesSignalViewModel()) {
        if (data) {
            if (data.hasOwnProperty('showSwaps')) {
                obj['showSwaps'] = ApiClient.convertToType(data['showSwaps'], 'boolean');
            }
            if (data.hasOwnProperty('showTickets')) {
                obj['showTickets'] = ApiClient.convertToType(data['showTickets'], 'boolean');
            }
            if (data.hasOwnProperty('trades')) {
                obj['trades'] = ApiClient.convertToType(data['trades'], [OrderSignalModel]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}

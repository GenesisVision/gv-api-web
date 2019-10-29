import { OrderModel } from './orderModel';
import { TradesDelay } from './tradesDelay';
import ApiClient from "../ApiClient";
export class TradesViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new TradesViewModel()) {
        if (data) {
            if (data.hasOwnProperty('showSwaps')) {
                obj['showSwaps'] = ApiClient.convertToType(data['showSwaps'], 'boolean');
            }
            if (data.hasOwnProperty('showTickets')) {
                obj['showTickets'] = ApiClient.convertToType(data['showTickets'], 'boolean');
            }
            if (data.hasOwnProperty('trades')) {
                obj['trades'] = ApiClient.convertToType(data['trades'], [OrderModel]);
            }
            if (data.hasOwnProperty('tradesDelay')) {
                obj['tradesDelay'] = TradesDelay.constructFromObject(data['tradesDelay']);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}

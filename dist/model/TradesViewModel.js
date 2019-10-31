import { OrderModel } from './OrderModel';
import { TradesDelay } from './TradesDelay';
import ApiClient from "../ApiClient";
export class TradesViewModel {
    constructor(data) {
        this['showSwaps'] = data['showSwaps'];
        this['showTickets'] = data['showTickets'];
        this['trades'] = data['trades'];
        this['tradesDelay'] = data['tradesDelay'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TradesViewModel({
                'showSwaps': ApiClient.convertToType(data['showSwaps'], 'boolean'),
                'showTickets': ApiClient.convertToType(data['showTickets'], 'boolean'),
                'trades': ApiClient.convertToType(data['trades'], [OrderModel]),
                'tradesDelay': TradesDelay.constructFromObject(data['tradesDelay']),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}

import { OrderModel } from './OrderModel';
import { TradesDelay } from './TradesDelay';
import ApiClient from "../ApiClient";
export class TradesViewModel {
    constructor(data) {
        this['showSwaps'] = data['showSwaps'];
        this['showTickets'] = data['showTickets'];
        this['tradesDelay'] = data['tradesDelay'];
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TradesViewModel({
                'showSwaps': ApiClient.convertToType(data['showSwaps'], 'boolean'),
                'showTickets': ApiClient.convertToType(data['showTickets'], 'boolean'),
                'tradesDelay': TradesDelay.constructFromObject(data['tradesDelay']),
                'items': ApiClient.convertToType(data['items'], [OrderModel]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}

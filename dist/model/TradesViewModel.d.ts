import { OrderModel } from './OrderModel';
import { TradesDelay } from './TradesDelay';
export declare class TradesViewModel {
    'showSwaps': boolean;
    'showTickets': boolean;
    'tradesDelay': TradesDelay;
    'items': Array<OrderModel>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TradesViewModel | undefined;
}

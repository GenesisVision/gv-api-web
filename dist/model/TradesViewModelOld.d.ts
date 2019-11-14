import { OrderModel } from './OrderModel';
import { TradesDelay } from './TradesDelay';
export declare class TradesViewModelOld {
    'showSwaps': boolean;
    'showTickets': boolean;
    'trades': Array<OrderModel>;
    'tradesDelay': TradesDelay;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TradesViewModelOld | undefined;
}

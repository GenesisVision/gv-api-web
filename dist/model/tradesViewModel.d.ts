import { OrderModel } from './orderModel';
import { TradesDelay } from './tradesDelay';
export declare class TradesViewModel {
    'showSwaps'?: boolean;
    'showTickets'?: boolean;
    'trades'?: [OrderModel];
    'tradesDelay'?: TradesDelay;
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: TradesViewModel): TradesViewModel;
}

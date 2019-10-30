import { OrderModel } from './OrderModel';
import { TradesDelay } from './TradesDelay';
export declare class TradesViewModel {
    'showSwaps'?: boolean;
    'showTickets'?: boolean;
    'trades'?: Array<OrderModel>;
    'tradesDelay'?: TradesDelay;
    'total'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: TradesViewModel): TradesViewModel;
}

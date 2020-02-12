import { OrderModel } from './OrderModel';
import { TradesDelay } from './TradesDelay';

export interface TradesViewModel {
    showSwaps: boolean;
    showTickets: boolean;
    tradesDelay: TradesDelay;
    readonly items: Array<OrderModel>;
    readonly total: number;
}


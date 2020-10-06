import { OrderModel } from './OrderModel';
import { TradesDelay } from './TradesDelay';

export interface TradesViewModel {
    readonly items: Array<OrderModel>;
    readonly total: number;
    showSwaps: boolean;
    showTickets: boolean;
    showDate: boolean;
    showDirection: boolean;
    showPrice: boolean;
    showPriceOpen: boolean;
    showProfit: boolean;
    tradesDelay: TradesDelay;
}


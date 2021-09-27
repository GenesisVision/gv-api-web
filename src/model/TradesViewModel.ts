import { OrderModel } from './OrderModel';
import { TradesDelay } from './TradesDelay';

export interface TradesViewModel {
    items: Array<OrderModel>;
    total: number;
    showSwaps: boolean;
    showTickets: boolean;
    showDate: boolean;
    showDirection: boolean;
    showPrice: boolean;
    showPriceOpen: boolean;
    showProfit: boolean;
    tradesDelay: TradesDelay;
}


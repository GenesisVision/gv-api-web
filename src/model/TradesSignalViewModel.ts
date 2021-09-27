import { OrderSignalModel } from './OrderSignalModel';
import { TradesDelay } from './TradesDelay';

export interface TradesSignalViewModel {
    items: Array<OrderSignalModel>;
    total: number;
    showSwaps: boolean;
    showTickets: boolean;
    tradesDelay: TradesDelay;
}


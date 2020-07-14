import { OrderSignalModel } from './OrderSignalModel';
import { TradesDelay } from './TradesDelay';

export interface TradesSignalViewModel {
    showSwaps: boolean;
    showTickets: boolean;
    tradesDelay: TradesDelay;
    readonly items: Array<OrderSignalModel>;
    readonly total: number;
}


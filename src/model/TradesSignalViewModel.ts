import { OrderSignalModel } from './OrderSignalModel';
import { TradesDelay } from './TradesDelay';

export interface TradesSignalViewModel {
    readonly items: Array<OrderSignalModel>;
    readonly total: number;
    showSwaps: boolean;
    showTickets: boolean;
    tradesDelay: TradesDelay;
}


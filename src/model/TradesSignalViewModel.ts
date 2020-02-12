import { OrderSignalModel } from './OrderSignalModel';

export interface TradesSignalViewModel {
    showSwaps: boolean;
    showTickets: boolean;
    readonly items: Array<OrderSignalModel>;
    readonly total: number;
}


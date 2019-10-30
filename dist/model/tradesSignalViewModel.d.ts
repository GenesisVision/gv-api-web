import { OrderSignalModel } from './orderSignalModel';
export declare class TradesSignalViewModel {
    'showSwaps'?: boolean;
    'showTickets'?: boolean;
    'trades'?: Array<OrderSignalModel>;
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: TradesSignalViewModel): TradesSignalViewModel;
}

import { OrderSignalModel } from './OrderSignalModel';
export declare class TradesSignalViewModel {
    'showSwaps'?: boolean;
    'showTickets'?: boolean;
    'trades'?: Array<OrderSignalModel>;
    'total'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: TradesSignalViewModel): TradesSignalViewModel;
}

import { OrderSignalModel } from './OrderSignalModel';
export declare class TradesSignalViewModel {
    'showSwaps': boolean;
    'showTickets': boolean;
    'trades': Array<OrderSignalModel>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TradesSignalViewModel | undefined;
}

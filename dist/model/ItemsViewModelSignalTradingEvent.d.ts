import { SignalTradingEvent } from './SignalTradingEvent';
export declare class ItemsViewModelSignalTradingEvent {
    'items': Array<SignalTradingEvent>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelSignalTradingEvent | undefined;
}

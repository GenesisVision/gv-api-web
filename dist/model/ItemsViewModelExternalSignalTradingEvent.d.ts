import { ExternalSignalTradingEvent } from './ExternalSignalTradingEvent';
export declare class ItemsViewModelExternalSignalTradingEvent {
    'items': Array<ExternalSignalTradingEvent>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelExternalSignalTradingEvent | undefined;
}

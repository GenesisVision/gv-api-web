import { SignalTradingEvent } from './signalTradingEvent';
export declare class SignalTradingEvents {
    'events'?: [SignalTradingEvent];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SignalTradingEvents): SignalTradingEvents;
}

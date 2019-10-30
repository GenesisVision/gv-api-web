import { SignalTradingEvent } from './signalTradingEvent';
export declare class SignalTradingEvents {
    'events'?: Array<SignalTradingEvent>;
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SignalTradingEvents): SignalTradingEvents;
}

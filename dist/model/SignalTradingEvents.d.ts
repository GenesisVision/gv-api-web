import { SignalTradingEvent } from './SignalTradingEvent';
export declare class SignalTradingEvents {
    'events'?: Array<SignalTradingEvent>;
    'total'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SignalTradingEvents): SignalTradingEvents;
}

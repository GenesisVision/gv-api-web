import { SignalTradingEvent } from './SignalTradingEvent';
export declare class SignalTradingEvents {
    'events': Array<SignalTradingEvent>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SignalTradingEvents;
}

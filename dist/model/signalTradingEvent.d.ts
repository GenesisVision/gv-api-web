export declare class SignalTradingEvent {
    'date'?: Date;
    'message'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SignalTradingEvent): SignalTradingEvent;
}

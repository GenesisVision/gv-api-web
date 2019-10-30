export declare class SignalTradingEvent {
    'date'?: Date;
    'message'?: string;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SignalTradingEvent): SignalTradingEvent;
}

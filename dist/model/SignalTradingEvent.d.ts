export declare class SignalTradingEvent {
    'date': Date;
    'message': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SignalTradingEvent | undefined;
}

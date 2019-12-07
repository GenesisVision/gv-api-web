export declare class SignalSubscriberInfo {
    'tradingAccountId': string;
    'tradingAccountLogin': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SignalSubscriberInfo | undefined;
}

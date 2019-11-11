export declare class ExternalSignalTradingEvent {
    'date': Date;
    'message': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ExternalSignalTradingEvent | undefined;
}

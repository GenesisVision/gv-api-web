export declare class MakeTradingAccountSignalProvider {
    'tradingAccountId': string;
    'volumeFee': number;
    'successFee': number;
    'title': string;
    'description': string;
    'logo': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): MakeTradingAccountSignalProvider | undefined;
}

export declare class NewExternalTradingAccountRequest {
    'brokerAccountTypeId': string;
    'keyTitle': string;
    'key': string;
    'secret': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): NewExternalTradingAccountRequest | undefined;
}

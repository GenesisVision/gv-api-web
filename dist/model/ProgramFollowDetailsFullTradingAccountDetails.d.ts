export declare class ProgramFollowDetailsFullTradingAccountDetails {
    'id': string;
    'login': string;
    'currency': CurrencyEnum;
    'leverageMin': number;
    'leverageMax': number;
    'balance': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramFollowDetailsFullTradingAccountDetails | undefined;
}
declare type CurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
export {};

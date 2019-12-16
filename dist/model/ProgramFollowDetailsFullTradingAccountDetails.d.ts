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
declare type CurrencyEnum = 'USD' | 'BTC' | 'Undefined' | 'GVT' | 'ETH' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};

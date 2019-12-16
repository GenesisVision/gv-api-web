import { PrivateTradingAccountType } from './PrivateTradingAccountType';
export declare class PrivateTradingAccountFullTradingAccountDetails {
    'currency': CurrencyEnum;
    'leverage': number;
    'apiKey': string;
    'login': string;
    'balance': number;
    'type': PrivateTradingAccountType;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PrivateTradingAccountFullTradingAccountDetails | undefined;
}
declare type CurrencyEnum = 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};

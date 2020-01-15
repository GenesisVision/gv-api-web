import { PrivateTradingAccountType } from './PrivateTradingAccountType';
export declare class PrivateTradingAccountFullTradingAccountDetails {
    'currency': CurrencyEnum;
    'leverage': number;
    'apiKey': string;
    'login': string;
    'balance': number;
    'type': PrivateTradingAccountType;
    'subscriptions': number;
    'isExternal': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PrivateTradingAccountFullTradingAccountDetails | undefined;
}
declare type CurrencyEnum = 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};

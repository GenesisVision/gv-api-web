import { AssetDetails } from './AssetDetails';
export declare class TradingAccountDetails {
    'id': string;
    'currency': CurrencyEnum;
    'login': string;
    'apiKey': string;
    'asset': AssetDetails;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TradingAccountDetails | undefined;
}
declare type CurrencyEnum = 'USDT' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
export {};

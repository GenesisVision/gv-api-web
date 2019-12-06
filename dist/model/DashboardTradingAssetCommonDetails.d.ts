import { DashboardTradingAssetStatus } from './DashboardTradingAssetStatus';
export declare class DashboardTradingAssetCommonDetails {
    'title': string;
    'status': DashboardTradingAssetStatus;
    'creationDate': Date;
    'balance': number;
    'login': string;
    'currency': CurrencyEnum;
    'leverage': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardTradingAssetCommonDetails | undefined;
}
declare type CurrencyEnum = 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};

import { DashboardTradingAssetStatus } from './DashboardTradingAssetStatus';
import { PrivateTradingAccountType } from './PrivateTradingAccountType';
export declare class DashboardTradingAssetCommonDetails {
    'title': string;
    'status': DashboardTradingAssetStatus;
    'creationDate': Date;
    'balance': number;
    'login': string;
    'currency': CurrencyEnum;
    'leverage': number;
    'type': PrivateTradingAccountType;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardTradingAssetCommonDetails | undefined;
}
declare type CurrencyEnum = 'USD' | 'BTC' | 'Undefined' | 'GVT' | 'ETH' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};

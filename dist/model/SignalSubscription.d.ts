import { SubscriptionMode } from './SubscriptionMode';
export declare class SignalSubscription {
    'followAssetId': string;
    'hasSignalAccount': boolean;
    'hasActiveSubscription': boolean;
    'mode': SubscriptionMode;
    'percent': number;
    'openTolerancePercent': number;
    'fixedVolume': number;
    'fixedCurrency': FixedCurrencyEnum;
    'totalProfit': number;
    'totalVolume': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SignalSubscription | undefined;
}
declare type FixedCurrencyEnum = 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};

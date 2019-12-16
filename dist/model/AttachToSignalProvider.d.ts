import { SubscriptionMode } from './SubscriptionMode';
export declare class AttachToSignalProvider {
    'tradingAccountId': string;
    'mode': SubscriptionMode;
    'percent': number;
    'openTolerancePercent': number;
    'fixedVolume': number;
    'fixedCurrency': FixedCurrencyEnum;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AttachToSignalProvider | undefined;
}
declare type FixedCurrencyEnum = 'USD' | 'BTC' | 'Undefined' | 'GVT' | 'ETH' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};

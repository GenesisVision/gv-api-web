import { SubscriptionMode } from './SubscriptionMode';
export declare class AttachToExternalSignalProviderExt {
    'externalKeyId': string;
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
    }): AttachToExternalSignalProviderExt | undefined;
}
declare type FixedCurrencyEnum = 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};

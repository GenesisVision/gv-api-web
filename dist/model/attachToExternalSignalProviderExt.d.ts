import { SubscriptionMode } from './subscriptionMode';
export declare class AttachToExternalSignalProviderExt {
    'externalKeyId'?: string;
    'mode'?: SubscriptionMode;
    'percent'?: number;
    'openTolerancePercent'?: number;
    'fixedVolume'?: number;
    'fixedCurrency'?: AttachToExternalSignalProviderExt.FixedCurrencyEnum;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: AttachToExternalSignalProviderExt): AttachToExternalSignalProviderExt;
}
export declare namespace AttachToExternalSignalProviderExt {
    type FixedCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
}

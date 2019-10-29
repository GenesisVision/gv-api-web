import { SubscriptionMode } from './subscriptionMode';
export declare class AttachToExternalSignalProviderCommon {
    'initialDepositCurrency'?: AttachToExternalSignalProviderCommon.InitialDepositCurrencyEnum;
    'initialDepositAmount'?: number;
    'mode'?: SubscriptionMode;
    'percent'?: number;
    'openTolerancePercent'?: number;
    'fixedVolume'?: number;
    'fixedCurrency'?: AttachToExternalSignalProviderCommon.FixedCurrencyEnum;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: AttachToExternalSignalProviderCommon): AttachToExternalSignalProviderCommon;
}
export declare namespace AttachToExternalSignalProviderCommon {
    type InitialDepositCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    type FixedCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
}

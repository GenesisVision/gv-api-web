import { SubscriptionMode } from './subscriptionMode';
export declare class AttachToSignalProvider {
    'initialDepositCurrency'?: AttachToSignalProvider.InitialDepositCurrencyEnum;
    'initialDepositAmount'?: number;
    'mode'?: SubscriptionMode;
    'percent'?: number;
    'openTolerancePercent'?: number;
    'fixedVolume'?: number;
    'fixedCurrency'?: AttachToSignalProvider.FixedCurrencyEnum;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: AttachToSignalProvider): AttachToSignalProvider;
}
export declare namespace AttachToSignalProvider {
    type InitialDepositCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    type FixedCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
}

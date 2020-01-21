import { SubscriptionMode } from './SubscriptionMode';
export declare class AttachToExternalSignalProviderCommon {
    'initialDepositCurrency': InitialDepositCurrencyEnum;
    'initialDepositAmount': number;
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
    }): AttachToExternalSignalProviderCommon | undefined;
}
declare type InitialDepositCurrencyEnum = 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
declare type FixedCurrencyEnum = 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};

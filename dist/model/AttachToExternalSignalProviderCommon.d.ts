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
declare type InitialDepositCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
declare type FixedCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
export {};

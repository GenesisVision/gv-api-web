import { SubscriptionMode } from './SubscriptionMode';

export interface AttachToExternalSignalProviderCommon {
    initialDepositCurrency: InitialDepositCurrencyEnum;
    initialDepositAmount: number;
    mode: SubscriptionMode;
    percent: number;
    openTolerancePercent: number;
    fixedVolume: number;
    fixedCurrency: FixedCurrencyEnum;
}

type InitialDepositCurrencyEnum = 'USD' | 'BTC' | 'ETH' | 'USDT' | 'Undefined' | 'GVT' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
type FixedCurrencyEnum = 'USD' | 'BTC' | 'ETH' | 'USDT' | 'Undefined' | 'GVT' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';

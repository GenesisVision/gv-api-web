import { SubscriptionMode } from './SubscriptionMode';

export interface AttachToExternalSignalProviderExt {
    tradingAccountId: string;
    mode: SubscriptionMode;
    percent: number;
    openTolerancePercent: number;
    fixedVolume: number;
    fixedCurrency: FixedCurrencyEnum;
}

type FixedCurrencyEnum = 'USD' | 'USDT' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';

import { SubscriptionMode } from './SubscriptionMode';

export interface AttachToExternalSignalProviderExt {
    tradingAccountId: string;
    mode: SubscriptionMode;
    percent: number;
    openTolerancePercent: number;
    fixedVolume: number;
    fixedCurrency: FixedCurrencyEnum;
}

type FixedCurrencyEnum = 'USDT' | 'USD' | 'BTC' | 'ETH' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';

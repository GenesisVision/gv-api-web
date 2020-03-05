import { SubscriptionMode } from './SubscriptionMode';

export interface AttachToExternalSignalProviderExt {
    tradingAccountId: string;
    mode: SubscriptionMode;
    percent: number;
    openTolerancePercent: number;
    fixedVolume: number;
    fixedCurrency: FixedCurrencyEnum;
}

type FixedCurrencyEnum = 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'USD' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';

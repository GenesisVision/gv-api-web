import { SubscriptionMode } from './SubscriptionMode';

export interface AttachToSignalProvider {
    tradingAccountId: string;
    mode: SubscriptionMode;
    percent: number;
    openTolerancePercent: number;
    fixedVolume: number;
    fixedCurrency: FixedCurrencyEnum;
}

type FixedCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';

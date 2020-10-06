import { Currency } from './Currency';
import { SubscriptionMode } from './SubscriptionMode';

export interface AttachToExternalSignalProviderExt {
    mode: SubscriptionMode;
    percent: number;
    openTolerancePercent: number;
    fixedVolume: number;
    fixedCurrency: Currency;
    tradingAccountId: string;
}


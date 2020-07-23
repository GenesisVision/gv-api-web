import { Currency } from './Currency';
import { SubscriptionMode } from './SubscriptionMode';

export interface AttachToExternalSignalProviderCommon {
    initialDepositCurrency: Currency;
    initialDepositAmount: number;
    mode: SubscriptionMode;
    percent: number;
    openTolerancePercent: number;
    fixedVolume: number;
    fixedCurrency: Currency;
}


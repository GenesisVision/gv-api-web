import { Currency } from './Currency';
import { SubscriptionMode } from './SubscriptionMode';

export interface AttachToExternalSignalProviderCommon {
    mode: SubscriptionMode;
    percent: number;
    openTolerancePercent: number;
    fixedVolume: number;
    fixedCurrency: Currency;
    initialDepositCurrency: Currency;
    initialDepositAmount: number;
}


import { AssetDetails } from './AssetDetails';
import { Currency } from './Currency';
import { SignalDetachMode } from './SignalDetachMode';
import { SignalSubscriberInfo } from './SignalSubscriberInfo';
import { SubscriptionMode } from './SubscriptionMode';

export interface SignalSubscription {
    subscriberInfo: SignalSubscriberInfo;
    asset: AssetDetails;
    status: string;
    subscriptionDate: Date;
    unsubscriptionDate: Date;
    hasSignalAccount: boolean;
    hasActiveSubscription: boolean;
    isExternal: boolean;
    mode: SubscriptionMode;
    detachMode: SignalDetachMode;
    percent: number;
    openTolerancePercent: number;
    fixedVolume: number;
    fixedCurrency: Currency;
    totalProfit: number;
    totalVolume: number;
    successFeePersonal: number;
    volumeFeePersonal: number;
}


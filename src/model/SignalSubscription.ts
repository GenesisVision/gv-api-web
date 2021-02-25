import { AssetDetails } from './AssetDetails';
import { BrokerDetails } from './BrokerDetails';
import { Currency } from './Currency';
import { ProfilePublic } from './ProfilePublic';
import { SignalDetachMode } from './SignalDetachMode';
import { SignalSubscriberInfo } from './SignalSubscriberInfo';
import { SubscriptionMode } from './SubscriptionMode';
import { Tag } from './Tag';

export interface SignalSubscription {
    subscriberInfo: SignalSubscriberInfo;
    asset: AssetDetails;
    assetOwner: ProfilePublic;
    assetBrokerDetails: BrokerDetails;
    assetTags: Array<Tag>;
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
    successFee: number;
    volumeFee: number;
}


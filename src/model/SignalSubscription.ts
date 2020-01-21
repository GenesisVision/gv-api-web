import { AssetDetails } from './AssetDetails';
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
    detachMode: DetachModeEnum;
    percent: number;
    openTolerancePercent: number;
    fixedVolume: number;
    fixedCurrency: FixedCurrencyEnum;
    totalProfit: number;
    totalVolume: number;
}

type DetachModeEnum = 'None' | 'ProviderCloseOnly' | 'CloseAllImmediately';
type FixedCurrencyEnum = 'USD' | 'USDT' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';

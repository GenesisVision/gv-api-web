import { AssetDetails } from './AssetDetails';
import { SignalSubscriberInfo } from './SignalSubscriberInfo';
import { SubscriptionMode } from './SubscriptionMode';
export declare class SignalSubscription {
    'subscriberInfo': SignalSubscriberInfo;
    'asset': AssetDetails;
    'status': string;
    'subscriptionDate': Date;
    'unsubscriptionDate': Date;
    'hasSignalAccount': boolean;
    'hasActiveSubscription': boolean;
    'isExternal': boolean;
    'mode': SubscriptionMode;
    'detachMode': DetachModeEnum;
    'percent': number;
    'openTolerancePercent': number;
    'fixedVolume': number;
    'fixedCurrency': FixedCurrencyEnum;
    'totalProfit': number;
    'totalVolume': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SignalSubscription | undefined;
}
declare type DetachModeEnum = 'None' | 'ProviderCloseOnly' | 'CloseAllImmediately';
declare type FixedCurrencyEnum = 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};

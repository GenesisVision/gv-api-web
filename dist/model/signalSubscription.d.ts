import { SubscriptionMode } from './subscriptionMode';
export declare class SignalSubscription {
    'hasSignalAccount'?: boolean;
    'hasActiveSubscription'?: boolean;
    'mode'?: SubscriptionMode;
    'percent'?: number;
    'openTolerancePercent'?: number;
    'fixedVolume'?: number;
    'fixedCurrency'?: SignalSubscription.FixedCurrencyEnum;
    'totalProfit'?: number;
    'totalVolume'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SignalSubscription): SignalSubscription;
}
export declare namespace SignalSubscription {
    type FixedCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
}

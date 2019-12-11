import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import { FundOwnerActions } from './FundOwnerActions';
export declare class PersonalFundDetails {
    'isOwnAsset': boolean;
    'isFavorite': boolean;
    'isInvested': boolean;
    'canInvest': boolean;
    'canWithdraw': boolean;
    'ownerActions': FundOwnerActions;
    'hasNotifications': boolean;
    'value': number;
    'status': AssetInvestmentStatus;
    'pendingInput': number;
    'pendingOutput': number;
    'pendingInOutCurrency': PendingInOutCurrencyEnum;
    'withdrawPercent': number;
    'availableReallocationPercents': number;
    'nextReallocationPercents': Date;
    'exitFeePersonal': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PersonalFundDetails | undefined;
}
declare type PendingInOutCurrencyEnum = 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};

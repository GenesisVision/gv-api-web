import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import { FundOwnerActions } from './FundOwnerActions';

export interface PersonalFundDetails {
    isFavorite: boolean;
    isInvested: boolean;
    canInvest: boolean;
    canWithdraw: boolean;
    ownerActions: FundOwnerActions;
    hasNotifications: boolean;
    value: number;
    status: AssetInvestmentStatus;
    pendingInput: number;
    pendingOutput: number;
    pendingInOutCurrency: PendingInOutCurrencyEnum;
    withdrawPercent: number;
    availableReallocationPercents: number;
    nextReallocationPercents: Date;
    exitFeePersonal: number;
}

type PendingInOutCurrencyEnum = 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';

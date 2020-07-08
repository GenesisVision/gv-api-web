import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import { Currency } from './Currency';
import { FundOwnerActions } from './FundOwnerActions';

export interface PersonalFundDetails {
    isFavorite: boolean;
    isInvested: boolean;
    canInvest: boolean;
    canWithdraw: boolean;
    canCancelRequest: boolean;
    ownerActions: FundOwnerActions;
    hasNotifications: boolean;
    value: number;
    status: AssetInvestmentStatus;
    pendingInput: number;
    pendingOutput: number;
    pendingInOutCurrency: Currency;
    withdrawPercent: number;
    availableReallocationPercents: number;
    nextReallocationPercents: Date;
    exitFeePersonal: number;
}


import { AssetInvestmentStatus } from './AssetInvestmentStatus';

export interface PersonalInvestingProgramDetailsList {
    isOwnAsset: boolean;
    isFavorite: boolean;
    isReinvest: boolean;
    isAutoJoin: boolean;
    canInvest: boolean;
    canWithdraw: boolean;
    canChangeReinvest: boolean;
    share: number;
    value: number;
    profit: number;
    profitPercent: number;
    invested: number;
    status: AssetInvestmentStatus;
}


import { AssetInvestmentStatus } from './AssetInvestmentStatus';

export interface PersonalInvestingFundDetailsList {
    isOwnAsset: boolean;
    isFavorite: boolean;
    canInvest: boolean;
    canWithdraw: boolean;
    share: number;
    value: number;
    status: AssetInvestmentStatus;
}


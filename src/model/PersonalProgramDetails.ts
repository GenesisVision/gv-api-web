import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import { MigrationRequest } from './MigrationRequest';

export interface PersonalProgramDetails {
    isFavorite: boolean;
    isReinvest: boolean;
    isAutoJoin: boolean;
    isInvested: boolean;
    canInvest: boolean;
    canWithdraw: boolean;
    canChangeReinvest: boolean;
    hasNotifications: boolean;
    showTwoFactorButton: boolean;
    value: number;
    profit: number;
    profitPercent: number;
    invested: number;
    pendingInput: number;
    pendingOutput: number;
    pendingOutputIsWithdrawAll: boolean;
    status: AssetInvestmentStatus;
    successFeePersonal: number;
    managementFeePersonal: number;
    migration: MigrationRequest;
    subscribedAccounts: number;
}


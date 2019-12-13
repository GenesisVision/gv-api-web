import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import { MigrationRequest } from './MigrationRequest';
export declare class PersonalProgramDetails {
    'isOwnAsset': boolean;
    'isFavorite': boolean;
    'isReinvest': boolean;
    'isInvested': boolean;
    'canInvest': boolean;
    'canWithdraw': boolean;
    'hasNotifications': boolean;
    'showTwoFactorButton': boolean;
    'value': number;
    'profit': number;
    'profitPercent': number;
    'invested': number;
    'pendingInput': number;
    'pendingOutput': number;
    'pendingOutputIsWithdrawAll': boolean;
    'status': AssetInvestmentStatus;
    'successFeePersonal': number;
    'migration': MigrationRequest;
    'subscribedAccounts': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PersonalProgramDetails | undefined;
}

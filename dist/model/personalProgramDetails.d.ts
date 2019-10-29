import { AssetInvestmentStatus } from './assetInvestmentStatus';
import { MigrationRequest } from './migrationRequest';
import { SignalSubscription } from './signalSubscription';
export declare class PersonalProgramDetails {
    'isOwnProgram'?: boolean;
    'isFavorite'?: boolean;
    'isReinvest'?: boolean;
    'isInvested'?: boolean;
    'canClose'?: boolean;
    'canClosePeriod'?: boolean;
    'canInvest'?: boolean;
    'canWithdraw'?: boolean;
    'canMakeSignalProvider'?: boolean;
    'canChangePassword'?: boolean;
    'hasNotifications'?: boolean;
    'showTwoFactorButton'?: boolean;
    'value'?: number;
    'profit'?: number;
    'invested'?: number;
    'pendingInput'?: number;
    'pendingOutput'?: number;
    'pendingOutputIsWithdrawAll'?: boolean;
    'status'?: AssetInvestmentStatus;
    'successFeePersonal'?: number;
    'migration'?: MigrationRequest;
    'signalSubscription'?: SignalSubscription;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: PersonalProgramDetails): PersonalProgramDetails;
}

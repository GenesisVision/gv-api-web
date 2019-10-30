import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import { MigrationRequestOld } from './MigrationRequestOld';
import { SignalSubscription } from './SignalSubscription';
export declare class PersonalProgramDetailsFullOld {
    'isReinvest'?: boolean;
    'gvtValue'?: number;
    'showTwoFactorButton'?: boolean;
    'signalSubscription'?: SignalSubscription;
    'login'?: string;
    'notificationAvailableToInvestId'?: string;
    'canMakeSignalProvider'?: boolean;
    'canChangePassword'?: boolean;
    'migration'?: MigrationRequestOld;
    'successFeePersonal'?: number;
    'isFavorite'?: boolean;
    'isInvested'?: boolean;
    'isOwnProgram'?: boolean;
    'canCloseAsset'?: boolean;
    'isFinishing'?: boolean;
    'canInvest'?: boolean;
    'canWithdraw'?: boolean;
    'canClosePeriod'?: boolean;
    'hasNotifications'?: boolean;
    'value'?: number;
    'profit'?: number;
    'invested'?: number;
    'pendingInput'?: number;
    'pendingOutput'?: number;
    'pendingOutputIsWithdrawAll'?: boolean;
    'status'?: AssetInvestmentStatus;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: PersonalProgramDetailsFullOld): PersonalProgramDetailsFullOld;
}

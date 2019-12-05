import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import { MigrationRequest } from './MigrationRequest';
import { ProgramOwnerActions } from './ProgramOwnerActions';
import { SignalSubscription } from './SignalSubscription';
export declare class PersonalProgramDetails {
    'isOwnAsset': boolean;
    'isFavorite': boolean;
    'isReinvest': boolean;
    'isInvested': boolean;
    'canInvest': boolean;
    'canWithdraw': boolean;
    'ownerActions': ProgramOwnerActions;
    'hasNotifications': boolean;
    'showTwoFactorButton': boolean;
    'value': number;
    'profit': number;
    'invested': number;
    'pendingInput': number;
    'pendingOutput': number;
    'pendingOutputIsWithdrawAll': boolean;
    'status': AssetInvestmentStatus;
    'successFeePersonal': number;
    'migration': MigrationRequest;
    'signalSubscriptions': Array<SignalSubscription>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PersonalProgramDetails | undefined;
}

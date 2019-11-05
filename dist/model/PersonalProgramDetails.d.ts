import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import { MigrationRequest } from './MigrationRequest';
import { SignalSubscription } from './SignalSubscription';
import { TradingAccountOwnerActions } from './TradingAccountOwnerActions';
export declare class PersonalProgramDetails {
    'isOwnAsset': boolean;
    'isFavorite': boolean;
    'isReinvest': boolean;
    'isInvested': boolean;
    'canInvest': boolean;
    'canWithdraw': boolean;
    'ownerActions': TradingAccountOwnerActions;
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
    'signalSubscription': SignalSubscription;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PersonalProgramDetails | undefined;
}

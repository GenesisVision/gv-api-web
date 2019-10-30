import { AssetInvestmentStatus } from './assetInvestmentStatus';
export declare class PersonalFundDetailsFullOld {
    'withdrawPercent'?: number;
    'canReallocate'?: boolean;
    'availableReallocationPercents'?: number;
    'nextReallocationPercents'?: Date;
    'exitFeePersonal'?: number;
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
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: PersonalFundDetailsFullOld): PersonalFundDetailsFullOld;
}

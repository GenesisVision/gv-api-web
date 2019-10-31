import { AssetInvestmentStatus } from './AssetInvestmentStatus';
export declare class PersonalFundDetails {
    'isOwnProgram': boolean;
    'isFavorite': boolean;
    'isInvested': boolean;
    'canClose': boolean;
    'canReallocate': boolean;
    'canInvest': boolean;
    'canWithdraw': boolean;
    'hasNotifications': boolean;
    'value': number;
    'status': AssetInvestmentStatus;
    'pendingInput': number;
    'pendingOutput': number;
    'withdrawPercent': number;
    'availableReallocationPercents': number;
    'nextReallocationPercents': Date;
    'exitFeePersonal': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PersonalFundDetails | undefined;
}

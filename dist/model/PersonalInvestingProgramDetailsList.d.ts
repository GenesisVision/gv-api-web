import { AssetInvestmentStatus } from './AssetInvestmentStatus';
export declare class PersonalInvestingProgramDetailsList {
    'isOwnAsset': boolean;
    'isFavorite': boolean;
    'isReinvest': boolean;
    'canInvest': boolean;
    'canWithdraw': boolean;
    'share': number;
    'value': number;
    'profit': number;
    'profitPercent': number;
    'invested': number;
    'status': AssetInvestmentStatus;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PersonalInvestingProgramDetailsList | undefined;
}

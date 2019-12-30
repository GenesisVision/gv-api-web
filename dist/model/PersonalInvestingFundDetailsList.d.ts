import { AssetInvestmentStatus } from './AssetInvestmentStatus';
export declare class PersonalInvestingFundDetailsList {
    'isOwnAsset': boolean;
    'isFavorite': boolean;
    'canInvest': boolean;
    'canWithdraw': boolean;
    'share': number;
    'value': number;
    'status': AssetInvestmentStatus;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PersonalInvestingFundDetailsList | undefined;
}

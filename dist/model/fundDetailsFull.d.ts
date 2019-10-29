import { FundAssetInfo } from './fundAssetInfo';
import { PersonalFundDetails } from './personalFundDetails';
import { ProfilePublic } from './profilePublic';
export declare class FundDetailsFull {
    'id'?: string;
    'logo'?: string;
    'url'?: string;
    'color'?: string;
    'title'?: string;
    'description'?: string;
    'creationDate'?: Date;
    'entryFeeSelected'?: number;
    'entryFeeCurrent'?: number;
    'exitFeeSelected'?: number;
    'exitFeeCurrent'?: number;
    'assetsStructure'?: [FundAssetInfo];
    'personalDetails'?: PersonalFundDetails;
    'manager'?: ProfilePublic;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundDetailsFull): FundDetailsFull;
}

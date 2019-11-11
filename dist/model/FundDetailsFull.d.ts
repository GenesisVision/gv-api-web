import { FundAssetInfo } from './FundAssetInfo';
import { PersonalFundDetails } from './PersonalFundDetails';
import { ProfilePublic } from './ProfilePublic';
export declare class FundDetailsFull {
    'id': string;
    'logo': string;
    'url': string;
    'color': string;
    'title': string;
    'description': string;
    'creationDate': Date;
    'status': string;
    'entryFeeSelected': number;
    'entryFeeCurrent': number;
    'exitFeeSelected': number;
    'exitFeeCurrent': number;
    'assetsStructure': Array<FundAssetInfo>;
    'personalDetails': PersonalFundDetails;
    'manager': ProfilePublic;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundDetailsFull | undefined;
}

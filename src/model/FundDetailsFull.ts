import { AssetPublicDetails } from './AssetPublicDetails';
import { FundAssetInfo } from './FundAssetInfo';
import { PersonalFundDetails } from './PersonalFundDetails';
import { ProfilePublic } from './ProfilePublic';

export interface FundDetailsFull {
    id: string;
    publicInfo: AssetPublicDetails;
    entryFeeSelected: number;
    entryFeeCurrent: number;
    exitFeeSelected: number;
    exitFeeCurrent: number;
    assetsStructure: Array<FundAssetInfo>;
    personalDetails: PersonalFundDetails;
    owner: ProfilePublic;
}


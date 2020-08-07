import { AssetPublicDetails } from './AssetPublicDetails';
import { FundAssetInfo } from './FundAssetInfo';
import { PersonalFundDetails } from './PersonalFundDetails';
import { ProfilePublic } from './ProfilePublic';
import { TradingScheduleInfo } from './TradingScheduleInfo';

export interface FundDetailsFull {
    id: string;
    publicInfo: AssetPublicDetails;
    entryFeeSelected: number;
    entryFeeCurrent: number;
    exitFeeSelected: number;
    exitFeeCurrent: number;
    tradingSchedule: TradingScheduleInfo;
    assetsStructure: Array<FundAssetInfo>;
    personalDetails: PersonalFundDetails;
    owner: ProfilePublic;
}


import { AssetPublicDetails } from './AssetPublicDetails';
import { FundAssetInfo } from './FundAssetInfo';
import { PersonalFundDetails } from './PersonalFundDetails';
import { ProfilePublic } from './ProfilePublic';
import { TradingScheduleViewModel } from './TradingScheduleViewModel';

export interface FundDetailsFull {
    id: string;
    publicInfo: AssetPublicDetails;
    entryFeeSelected: number;
    entryFeeCurrent: number;
    exitFeeSelected: number;
    exitFeeCurrent: number;
    hasTradingSchedule: boolean;
    tradingSchedule: Array<TradingScheduleViewModel>;
    assetsStructure: Array<FundAssetInfo>;
    personalDetails: PersonalFundDetails;
    owner: ProfilePublic;
}


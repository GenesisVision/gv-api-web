import { FundAssetPercent } from './FundAssetPercent';
import { TradingScheduleInfo } from './TradingScheduleInfo';

export interface FundAssetDetails {
    topFundAssets: Array<FundAssetPercent>;
    totalAssetsCount: number;
    tradingSchedule: TradingScheduleInfo;
    entryFeeCurrent: number;
    entryFeeSelected: number;
    exitFeeCurrent: number;
    exitFeeSelected: number;
}


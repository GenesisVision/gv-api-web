import { FundAssetPercent } from './FundAssetPercent';
import { TradingScheduleInfo } from './TradingScheduleInfo';

export interface FundAssetDetails {
    topFundAssets: Array<FundAssetPercent>;
    totalAssetsCount: number;
    tradingSchedule: TradingScheduleInfo;
}


import { AssetProvider } from './AssetProvider';
import { TradingScheduleInfo } from './TradingScheduleInfo';

export interface ProviderPlatformAssets {
    type: AssetProvider;
    tradingSchedule: TradingScheduleInfo;
}


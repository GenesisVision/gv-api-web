import { AssetProvider } from './AssetProvider';
import { TradingScheduleViewModel } from './TradingScheduleViewModel';

export interface ProviderPlatformAssets {
    type: AssetProvider;
    hasTradingSchedule: boolean;
    tradingSchedule: Array<TradingScheduleViewModel>;
}


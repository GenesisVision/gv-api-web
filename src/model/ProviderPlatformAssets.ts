import { AssetProvider } from './AssetProvider';
import { PlatformAsset } from './PlatformAsset';
import { TradingScheduleViewModel } from './TradingScheduleViewModel';

export interface ProviderPlatformAssets {
    type: AssetProvider;
    hasTradingSchedule: boolean;
    tradingSchedule: Array<TradingScheduleViewModel>;
    assets: Array<PlatformAsset>;
}


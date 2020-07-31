import { DashboardTradingAsset } from './DashboardTradingAsset';

export interface DashboardTradingAssetItemsViewModel {
    readonly items: Array<DashboardTradingAsset>;
    readonly total: number;
}


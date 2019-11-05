import { DashboardTradingAsset } from './DashboardTradingAsset';
export declare class ItemsViewModelDashboardTradingAsset {
    'items': Array<DashboardTradingAsset>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelDashboardTradingAsset | undefined;
}

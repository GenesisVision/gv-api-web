import { DashboardAsset } from './dashboardAsset';
export declare class DashboardAssets {
    'assets'?: [DashboardAsset];
    'othersPercent'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: DashboardAssets): DashboardAssets;
}

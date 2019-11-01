import { DashboardAsset } from './DashboardAsset';
export declare class DashboardAssets {
    'assets': Array<DashboardAsset>;
    'othersPercent': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardAssets | undefined;
}

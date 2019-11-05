import { DashboardChartAsset } from './DashboardChartAsset';
export declare class DashboardChartAssets {
    'assets': Array<DashboardChartAsset>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardChartAssets | undefined;
}

import { DashboardAssetChart } from './DashboardAssetChart';
export declare class DashboardChart {
    'charts': Array<DashboardAssetChart>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardChart | undefined;
}

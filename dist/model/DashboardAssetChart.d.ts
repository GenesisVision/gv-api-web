import { SimpleChartPoint } from './SimpleChartPoint';
export declare class DashboardAssetChart {
    'assetId': string;
    'color': string;
    'chart': Array<SimpleChartPoint>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardAssetChart | undefined;
}

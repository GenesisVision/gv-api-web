import { SimpleChartPoint } from './SimpleChartPoint';

export interface DashboardAssetChart {
    assetId: string;
    color: string;
    chart: Array<SimpleChartPoint>;
}


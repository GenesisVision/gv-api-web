import { SimpleChartPoint } from './simpleChartPoint';
export declare class ProfitChart {
    'chart'?: [SimpleChartPoint];
    'profit'?: number;
    'drawdown'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProfitChart): ProfitChart;
}

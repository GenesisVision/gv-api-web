import { BalanceChartPoint } from './balanceChartPoint';
export declare class FundBalanceChart {
    'balance'?: number;
    'chart'?: [BalanceChartPoint];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundBalanceChart): FundBalanceChart;
}

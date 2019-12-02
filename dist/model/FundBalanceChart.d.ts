import { BalanceChartPoint } from './BalanceChartPoint';
export declare class FundBalanceChart {
    'balance': number;
    'color': string;
    'chart': Array<BalanceChartPoint>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundBalanceChart | undefined;
}

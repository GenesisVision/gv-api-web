import { BalanceChartPoint } from './balanceChartPoint';
import { Currency } from './currency';
export declare class ProgramBalanceChart {
    'balance'?: number;
    'programCurrency'?: Currency;
    'chart'?: [BalanceChartPoint];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramBalanceChart): ProgramBalanceChart;
}

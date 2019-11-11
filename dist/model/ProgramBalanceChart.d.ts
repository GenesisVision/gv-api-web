import { BalanceChartPoint } from './BalanceChartPoint';
import { Currency } from './Currency';
export declare class ProgramBalanceChart {
    'balance': number;
    'programCurrency': Currency;
    'color': string;
    'chart': Array<BalanceChartPoint>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramBalanceChart | undefined;
}

import { Currency } from './currency';
import { ProgramBalanceChartElementOld } from './programBalanceChartElementOld';
export declare class ProgramBalanceChartOld {
    'balance'?: number;
    'programCurrency'?: Currency;
    'balanceChart'?: Array<ProgramBalanceChartElementOld>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramBalanceChartOld): ProgramBalanceChartOld;
}

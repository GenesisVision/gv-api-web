import { Currency } from './Currency';
import { ProgramBalanceChartElementOld } from './ProgramBalanceChartElementOld';
export declare class ProgramBalanceChartOld {
    'balance'?: number;
    'programCurrency'?: Currency;
    'balanceChart'?: Array<ProgramBalanceChartElementOld>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramBalanceChartOld): ProgramBalanceChartOld;
}

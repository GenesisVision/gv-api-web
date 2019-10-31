import { Currency } from './Currency';
import { ProgramBalanceChartElementOld } from './ProgramBalanceChartElementOld';
export declare class ProgramBalanceChartOld {
    'balance': number;
    'programCurrency': Currency;
    'balanceChart': Array<ProgramBalanceChartElementOld>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramBalanceChartOld;
}

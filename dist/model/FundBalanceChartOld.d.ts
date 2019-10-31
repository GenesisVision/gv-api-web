import { BalanceChartElementOld } from './BalanceChartElementOld';
export declare class FundBalanceChartOld {
    'balance': number;
    'balanceChart': Array<BalanceChartElementOld>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundBalanceChartOld;
}

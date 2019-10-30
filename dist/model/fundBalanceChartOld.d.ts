import { BalanceChartElementOld } from './balanceChartElementOld';
export declare class FundBalanceChartOld {
    'balance'?: number;
    'balanceChart'?: [BalanceChartElementOld];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundBalanceChartOld): FundBalanceChartOld;
}

import { BalanceChartElementOld } from './BalanceChartElementOld';
export declare class FundBalanceChartOld {
    'balance'?: number;
    'balanceChart'?: Array<BalanceChartElementOld>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundBalanceChartOld): FundBalanceChartOld;
}

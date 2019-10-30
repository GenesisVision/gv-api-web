import { AmountWithCurrency } from './amountWithCurrency';
export declare class FundStatisticOld {
    'balance'?: AmountWithCurrency;
    'profitPercent'?: number;
    'drawdownPercent'?: number;
    'investorsCount'?: number;
    'startDate'?: Date;
    'startBalance'?: number;
    'investedAmount'?: number;
    'rebalancingCount'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundStatisticOld): FundStatisticOld;
}

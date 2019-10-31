import { AmountWithCurrency } from './AmountWithCurrency';
export declare class FundStatisticOld {
    'balance': AmountWithCurrency;
    'profitPercent': number;
    'drawdownPercent': number;
    'investorsCount': number;
    'startDate': Date;
    'startBalance': number;
    'investedAmount': number;
    'rebalancingCount': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundStatisticOld | undefined;
}

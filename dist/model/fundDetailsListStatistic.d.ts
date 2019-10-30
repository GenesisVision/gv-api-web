import { AmountWithCurrency } from './amountWithCurrency';
export declare class FundDetailsListStatistic {
    'balance'?: AmountWithCurrency;
    'profitPercent'?: number;
    'drawdownPercent'?: number;
    'investorsCount'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundDetailsListStatistic): FundDetailsListStatistic;
}

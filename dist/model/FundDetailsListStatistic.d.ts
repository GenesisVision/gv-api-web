import { AmountWithCurrency } from './AmountWithCurrency';
export declare class FundDetailsListStatistic {
    'balance'?: AmountWithCurrency;
    'profitPercent'?: number;
    'drawdownPercent'?: number;
    'investorsCount'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundDetailsListStatistic): FundDetailsListStatistic;
}

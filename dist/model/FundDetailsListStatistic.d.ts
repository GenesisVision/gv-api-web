import { AmountWithCurrency } from './AmountWithCurrency';
export declare class FundDetailsListStatistic {
    'balance': AmountWithCurrency;
    'profitPercent': number;
    'drawdownPercent': number;
    'investorsCount': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundDetailsListStatistic;
}

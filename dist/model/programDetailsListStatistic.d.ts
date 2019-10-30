import { AmountWithCurrency } from './amountWithCurrency';
export declare class ProgramDetailsListStatistic {
    'balance'?: AmountWithCurrency;
    'currentValue'?: number;
    'profitPercent'?: number;
    'profitValue'?: number;
    'drawdownPercent'?: number;
    'investorsCount'?: number;
    'tradesCount'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramDetailsListStatistic): ProgramDetailsListStatistic;
}

import { AmountWithCurrency } from './AmountWithCurrency';
export declare class ProgramDetailsListStatistic {
    'balance'?: AmountWithCurrency;
    'currentValue'?: number;
    'profitPercent'?: number;
    'profitValue'?: number;
    'drawdownPercent'?: number;
    'investorsCount'?: number;
    'tradesCount'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramDetailsListStatistic): ProgramDetailsListStatistic;
}

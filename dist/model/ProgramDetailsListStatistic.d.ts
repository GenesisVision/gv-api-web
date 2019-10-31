import { AmountWithCurrency } from './AmountWithCurrency';
export declare class ProgramDetailsListStatistic {
    'balance': AmountWithCurrency;
    'currentValue': number;
    'profitPercent': number;
    'profitValue': number;
    'drawdownPercent': number;
    'investorsCount': number;
    'tradesCount': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramDetailsListStatistic | undefined;
}

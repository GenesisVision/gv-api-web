import { AmountWithCurrency } from './AmountWithCurrency';
import { Currency } from './Currency';
export declare class ProgramStatistic {
    'balanceBase': AmountWithCurrency;
    'balanceGVT': AmountWithCurrency;
    'balanceSecondary': AmountWithCurrency;
    'currentValue': number;
    'profitPercent': number;
    'profitValue': number;
    'drawdownPercent': number;
    'investorsCount': number;
    'hasNotifications': boolean;
    'startDate': Date;
    'startBalance': number;
    'startCurrency': Currency;
    'investedAmount': number;
    'investedCurrency': Currency;
    'tradesCount': number;
    'tradesSuccessCount': number;
    'profitFactorPercent': number;
    'sharpeRatioPercent': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramStatistic;
}

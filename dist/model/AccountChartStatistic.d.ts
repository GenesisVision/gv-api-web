export declare class AccountChartStatistic {
    'tradingVolume': number;
    'trades': number;
    'successTradesPercent': number;
    'profitFactor': number;
    'balance': number;
    'profitPercent': number;
    'sharpeRatio': number;
    'sortinoRatio': number;
    'calmarRatio': number;
    'maxDrawdown': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AccountChartStatistic | undefined;
}
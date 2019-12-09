export declare class ProgramChartStatistic {
    'investors': number;
    'tradingVolume': number;
    'trades': number;
    'successTradesPercent': number;
    'profitFactor': number;
    'lastPeriodStarts': Date;
    'lastPeriodEnds': Date;
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
    }): ProgramChartStatistic | undefined;
}

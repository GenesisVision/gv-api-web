export declare class ProgramChartStatistic {
    'profit'?: number;
    'tradingVolume'?: number;
    'trades'?: number;
    'successTradesPercent'?: number;
    'profitFactor'?: number;
    'lastPeriodStarts'?: Date;
    'lastPeriodEnds'?: Date;
    'balance'?: number;
    'investors'?: number;
    'sharpeRatio'?: number;
    'sortinoRatio'?: number;
    'calmarRatio'?: number;
    'maxDrawdown'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramChartStatistic): ProgramChartStatistic;
}

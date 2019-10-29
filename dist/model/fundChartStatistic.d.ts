export declare class FundChartStatistic {
    'profitPercent'?: number;
    'creationDate'?: Date;
    'balance'?: number;
    'investors'?: number;
    'sharpeRatio'?: number;
    'sortinoRatio'?: number;
    'calmarRatio'?: number;
    'maxDrawdown'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundChartStatistic): FundChartStatistic;
}

export declare class FundChartStatistic {
    'investors': number;
    'profitPercent': number;
    'creationDate': Date;
    'balance': number;
    'sharpeRatio': number;
    'sortinoRatio': number;
    'calmarRatio': number;
    'maxDrawdown': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundChartStatistic | undefined;
}

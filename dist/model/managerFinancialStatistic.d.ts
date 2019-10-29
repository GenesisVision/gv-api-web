export declare class ManagerFinancialStatistic {
    'successFee'?: number;
    'entryFee'?: number;
    'profit'?: number;
    'balance'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ManagerFinancialStatistic): ManagerFinancialStatistic;
}

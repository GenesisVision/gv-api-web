export declare class ManagerFinancialStatistic {
    'successFee': number;
    'entryFee': number;
    'profit': number;
    'balance': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ManagerFinancialStatistic;
}

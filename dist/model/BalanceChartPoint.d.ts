export declare class BalanceChartPoint {
    'date': Date;
    'managerFunds': number;
    'investorsFunds': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): BalanceChartPoint | undefined;
}

export declare class BalanceChartPoint {
    'date'?: Date;
    'managerFunds'?: number;
    'investorsFunds'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: BalanceChartPoint): BalanceChartPoint;
}

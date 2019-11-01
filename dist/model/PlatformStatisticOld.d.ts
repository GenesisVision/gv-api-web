export declare class PlatformStatisticOld {
    'managers': number;
    'investors': number;
    'profitWeek': number;
    'investmentAmount': number;
    'totalInvestorsProfit': number;
    'totalProfit': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PlatformStatisticOld | undefined;
}

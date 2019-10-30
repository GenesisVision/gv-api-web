export declare class PlatformStatisticOld {
    'managers'?: number;
    'investors'?: number;
    'profitWeek'?: number;
    'investmentAmount'?: number;
    'totalInvestorsProfit'?: number;
    'totalProfit'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: PlatformStatisticOld): PlatformStatisticOld;
}

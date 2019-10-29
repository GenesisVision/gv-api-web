export declare class FundWithdrawInfo {
    'exitFee'?: number;
    'title'?: string;
    'availableToWithdraw'?: number;
    'isOwner'?: boolean;
    'withheldInvestment'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundWithdrawInfo): FundWithdrawInfo;
}

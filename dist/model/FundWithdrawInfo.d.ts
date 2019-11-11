export declare class FundWithdrawInfo {
    'exitFee': number;
    'title': string;
    'availableToWithdraw': number;
    'isOwner': boolean;
    'withheldInvestment': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundWithdrawInfo | undefined;
}

export declare class FundWithdrawInfoOld {
    'exitFee'?: number;
    'title'?: string;
    'availableToWithdraw'?: number;
    'rate'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundWithdrawInfoOld): FundWithdrawInfoOld;
}

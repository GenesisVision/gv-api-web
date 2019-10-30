export declare class ManagerFundWithdrawInfoOld {
    'withheldInvestment'?: number;
    'exitFee'?: number;
    'title'?: string;
    'availableToWithdraw'?: number;
    'rate'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ManagerFundWithdrawInfoOld): ManagerFundWithdrawInfoOld;
}

export declare class ManagerFundWithdrawInfoOld {
    'withheldInvestment': number;
    'exitFee': number;
    'title': string;
    'availableToWithdraw': number;
    'rate': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ManagerFundWithdrawInfoOld | undefined;
}

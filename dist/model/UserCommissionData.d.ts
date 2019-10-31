export declare class UserCommissionData {
    'isPayingCommissionInGvt': boolean;
    'gvtHolderTradingFee': number;
    'gvtHolderDiscount': number;
    'regularTradingFee': number;
    'regularDiscount': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): UserCommissionData | undefined;
}

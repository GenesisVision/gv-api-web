export declare class UserCommissionData {
    'isPayingCommissionInGvt'?: boolean;
    'gvtHolderTradingFee'?: number;
    'gvtHolderDiscount'?: number;
    'regularTradingFee'?: number;
    'regularDiscount'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: UserCommissionData): UserCommissionData;
}

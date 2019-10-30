export declare class FundInvestInfo {
    'title'?: string;
    'programCurrencyMinInvestment'?: number;
    'entryFee'?: number;
    'gvCommission'?: number;
    'rate'?: number;
    'isOwnProgram'?: boolean;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundInvestInfo): FundInvestInfo;
}

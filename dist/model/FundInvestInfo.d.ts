export declare class FundInvestInfo {
    'title': string;
    'programCurrencyMinInvestment': number;
    'entryFee': number;
    'gvCommission': number;
    'rate': number;
    'isOwnProgram': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundInvestInfo;
}

export declare class FundAssetInvestmentRequest {
    'entryFee'?: number;
    'exitFee'?: number;
    'withdrawPercent'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundAssetInvestmentRequest): FundAssetInvestmentRequest;
}

export declare class FundAssetInvestmentRequest {
    'entryFee': number;
    'exitFee': number;
    'withdrawPercent': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundAssetInvestmentRequest | undefined;
}

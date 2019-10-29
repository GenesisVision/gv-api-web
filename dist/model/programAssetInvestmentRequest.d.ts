export declare class ProgramAssetInvestmentRequest {
    'isWithdrawAll'?: boolean;
    'successFee'?: number;
    'entryFee'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramAssetInvestmentRequest): ProgramAssetInvestmentRequest;
}

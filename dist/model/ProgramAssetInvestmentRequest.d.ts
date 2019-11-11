export declare class ProgramAssetInvestmentRequest {
    'isWithdrawAll': boolean;
    'successFee': number;
    'entryFee': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramAssetInvestmentRequest | undefined;
}

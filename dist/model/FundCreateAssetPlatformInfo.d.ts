export declare class FundCreateAssetPlatformInfo {
    'maxEntryFee': number;
    'maxExitFee': number;
    'minDeposit': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundCreateAssetPlatformInfo | undefined;
}

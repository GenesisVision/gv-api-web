import { FundAssetPercent } from './FundAssetPercent';
export declare class FundAssetDetails {
    'topFundAssets': Array<FundAssetPercent>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundAssetDetails | undefined;
}

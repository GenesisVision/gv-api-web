import { AmountWithCurrency } from './AmountWithCurrency';
import { AssetFacet } from './AssetFacet';
import { FundCreateAssetPlatformInfo } from './FundCreateAssetPlatformInfo';
import { PlatformAsset } from './PlatformAsset';
export declare class FundAssetPlatformInfo {
    'facets': Array<AssetFacet>;
    'assets': Array<PlatformAsset>;
    'minInvestAmountIntoFund': Array<AmountWithCurrency>;
    'createFundInfo': FundCreateAssetPlatformInfo;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundAssetPlatformInfo | undefined;
}

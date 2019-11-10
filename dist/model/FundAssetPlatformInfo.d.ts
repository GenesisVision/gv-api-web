import { AmountWithCurrency } from './AmountWithCurrency';
import { FundCreateAssetPlatformInfo } from './FundCreateAssetPlatformInfo';
import { FundFacet } from './FundFacet';
import { PlatformAsset } from './PlatformAsset';
export declare class FundAssetPlatformInfo {
    'facets': Array<FundFacet>;
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

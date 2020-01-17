import { AmountWithCurrency } from './AmountWithCurrency';
import { AssetFacet } from './AssetFacet';
import { FundCreateAssetPlatformInfo } from './FundCreateAssetPlatformInfo';
import { PlatformAsset } from './PlatformAsset';

export interface FundAssetPlatformInfo {
    facets: Array<AssetFacet>;
    assets: Array<PlatformAsset>;
    minInvestAmountIntoFund: Array<AmountWithCurrency>;
    createFundInfo: FundCreateAssetPlatformInfo;
}


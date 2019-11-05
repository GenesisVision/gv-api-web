import { AmountWithCurrency } from './AmountWithCurrency';
import { FundFacet } from './FundFacet';
import { PlatformAsset } from './PlatformAsset';
export declare class FundAssetPlatformInfo {
    'facets': Array<FundFacet>;
    'assets': Array<PlatformAsset>;
    'minInvestAmountIntoFund': Array<AmountWithCurrency>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundAssetPlatformInfo | undefined;
}

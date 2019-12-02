import { AmountWithCurrency } from './AmountWithCurrency';
import { AssetFacet } from './AssetFacet';
import { FundCreateAssetPlatformInfo } from './FundCreateAssetPlatformInfo';
import { PlatformAsset } from './PlatformAsset';
import ApiClient from "../ApiClient";
export class FundAssetPlatformInfo {
    constructor(data) {
        this['facets'] = data['facets'];
        this['assets'] = data['assets'];
        this['minInvestAmountIntoFund'] = data['minInvestAmountIntoFund'];
        this['createFundInfo'] = data['createFundInfo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundAssetPlatformInfo({
                'facets': ApiClient.convertToType(data['facets'], [AssetFacet]),
                'assets': ApiClient.convertToType(data['assets'], [PlatformAsset]),
                'minInvestAmountIntoFund': ApiClient.convertToType(data['minInvestAmountIntoFund'], [AmountWithCurrency]),
                'createFundInfo': FundCreateAssetPlatformInfo.constructFromObject(data['createFundInfo']),
            });
        }
    }
}

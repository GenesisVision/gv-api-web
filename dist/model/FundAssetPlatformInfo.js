import { FundFacet } from './FundFacet';
import { PlatformAsset } from './PlatformAsset';
import ApiClient from "../ApiClient";
export class FundAssetPlatformInfo {
    constructor(data) {
        this['facets'] = data['facets'];
        this['assets'] = data['assets'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundAssetPlatformInfo({
                'facets': ApiClient.convertToType(data['facets'], [FundFacet]),
                'assets': ApiClient.convertToType(data['assets'], [PlatformAsset]),
            });
        }
    }
}

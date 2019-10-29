import { FundFacet } from './fundFacet';
import { PlatformAsset } from './platformAsset';
import ApiClient from "../ApiClient";
export class FundAssetPlatformInfo {
    constructor() {
    }
    static constructFromObject(data, obj = new FundAssetPlatformInfo()) {
        if (data) {
            if (data.hasOwnProperty('facets')) {
                obj['facets'] = ApiClient.convertToType(data['facets'], [FundFacet]);
            }
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [PlatformAsset]);
            }
        }
        return obj;
    }
}

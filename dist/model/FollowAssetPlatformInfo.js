import { AssetFacet } from './AssetFacet';
import { FollowCreateAssetPlatformInfo } from './FollowCreateAssetPlatformInfo';
import ApiClient from "../ApiClient";
export class FollowAssetPlatformInfo {
    constructor(data) {
        this['facets'] = data['facets'];
        this['createFollowInfo'] = data['createFollowInfo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FollowAssetPlatformInfo({
                'facets': ApiClient.convertToType(data['facets'], [AssetFacet]),
                'createFollowInfo': FollowCreateAssetPlatformInfo.constructFromObject(data['createFollowInfo']),
            });
        }
    }
}

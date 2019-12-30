import { AssetFacet } from './AssetFacet';
import { FollowCreateAssetPlatformInfo } from './FollowCreateAssetPlatformInfo';
import { Tag } from './Tag';
import ApiClient from "../ApiClient";
export class FollowAssetPlatformInfo {
    constructor(data) {
        this['facets'] = data['facets'];
        this['tags'] = data['tags'];
        this['createFollowInfo'] = data['createFollowInfo'];
        this['subscribeFixedCurrencies'] = data['subscribeFixedCurrencies'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FollowAssetPlatformInfo({
                'facets': ApiClient.convertToType(data['facets'], [AssetFacet]),
                'tags': ApiClient.convertToType(data['tags'], [Tag]),
                'createFollowInfo': FollowCreateAssetPlatformInfo.constructFromObject(data['createFollowInfo']),
                'subscribeFixedCurrencies': ApiClient.convertToType(data['subscribeFixedCurrencies'], ['string']),
            });
        }
    }
}

import { AssetFacet } from './AssetFacet';
import { FollowCreateAssetPlatformInfo } from './FollowCreateAssetPlatformInfo';
import { Tag } from './Tag';

export interface FollowAssetPlatformInfo {
    facets: Array<AssetFacet>;
    tags: Array<Tag>;
    createFollowInfo: FollowCreateAssetPlatformInfo;
    subscribeFixedCurrencies: Array<string>;
}


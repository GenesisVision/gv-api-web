import { AssetFacet } from './AssetFacet';
import { FollowCreateAssetPlatformInfo } from './FollowCreateAssetPlatformInfo';
import { Tag } from './Tag';
export declare class FollowAssetPlatformInfo {
    'facets': Array<AssetFacet>;
    'tags': Array<Tag>;
    'createFollowInfo': FollowCreateAssetPlatformInfo;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FollowAssetPlatformInfo | undefined;
}

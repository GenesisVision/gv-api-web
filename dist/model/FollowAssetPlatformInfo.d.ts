import { AssetFacet } from './AssetFacet';
import { FollowCreateAssetPlatformInfo } from './FollowCreateAssetPlatformInfo';
export declare class FollowAssetPlatformInfo {
    'facets': Array<AssetFacet>;
    'createFollowInfo': FollowCreateAssetPlatformInfo;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FollowAssetPlatformInfo | undefined;
}

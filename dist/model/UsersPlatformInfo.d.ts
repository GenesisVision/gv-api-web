import { AssetFacet } from './AssetFacet';
import { Tag } from './Tag';
export declare class UsersPlatformInfo {
    'facets': Array<AssetFacet>;
    'tags': Array<Tag>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): UsersPlatformInfo | undefined;
}

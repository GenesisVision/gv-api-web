import { AssetFacet } from './AssetFacet';
import { Tag } from './Tag';
import ApiClient from "../ApiClient";
export class UsersPlatformInfo {
    constructor(data) {
        this['facets'] = data['facets'];
        this['tags'] = data['tags'];
    }
    static constructFromObject(data) {
        if (data) {
            return new UsersPlatformInfo({
                'facets': ApiClient.convertToType(data['facets'], [AssetFacet]),
                'tags': ApiClient.convertToType(data['tags'], [Tag]),
            });
        }
    }
}

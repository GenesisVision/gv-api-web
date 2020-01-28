/**
 * Core API v2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AssetFacet } from './AssetFacet';
import { Tag } from './Tag';

import ApiClient from "../ApiClient";

export class UsersPlatformInfo { 
    public 'facets': Array<AssetFacet>;
    public 'tags': Array<Tag>;

    constructor(data: {[key: string]: any}) { 
        this['facets'] = data['facets'];
        this['tags'] = data['tags'];
    }

    static constructFromObject(data: {[key: string]: any}): UsersPlatformInfo | undefined {
        if (data) {
            return new UsersPlatformInfo({ 
                'facets': ApiClient.convertToType(data['facets'], [AssetFacet]),
                'tags': ApiClient.convertToType(data['tags'], [Tag]),
            });
        }
    }
}




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
import { SocialLinkType } from './SocialLinkType';

import ApiClient from "../ApiClient";

export class UpdateSocialLinkViewModel { 
    public 'type': SocialLinkType;
    public 'value': string;

    constructor(data: {[key: string]: any}) { 
        this['type'] = data['type'];
        this['value'] = data['value'];
    }

    static constructFromObject(data: {[key: string]: any}): UpdateSocialLinkViewModel | undefined {
        if (data) {
            return new UpdateSocialLinkViewModel({ 
                'type': SocialLinkType.constructFromObject(data['type']),
                'value': ApiClient.convertToType(data['value'], 'string'),
            });
        }
    }
}




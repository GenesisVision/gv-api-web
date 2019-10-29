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
import { SocialLinkViewModel } from './socialLinkViewModel';

import ApiClient from "../ApiClient";

export class SocialLinksViewModel { 
    public socialLinks?: [SocialLinkViewModel];

    static constructFromObject(data: {[key: string]: any}, obj: SocialLinksViewModel = new SocialLinksViewModel()): SocialLinksViewModel {
        if (data) {
            if (data.hasOwnProperty('socialLinks')) {
                obj['socialLinks'] = ApiClient.convertToType(data['socialLinks'], [SocialLinkViewModel]);
            }
        }
        return obj;
    }
}




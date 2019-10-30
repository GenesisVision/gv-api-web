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

export class PublicProfile { 
    public 'id'?: string;
    public 'username'?: string;
    public 'about'?: string;
    public 'avatar'?: string;
    public 'regDate'?: Date;
    public 'assets'?: [string];
    public 'url'?: string;
    public 'socialLinks'?: [SocialLinkViewModel];
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: PublicProfile = new PublicProfile()): PublicProfile {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'string');
            }
            if (data.hasOwnProperty('about')) {
                obj['about'] = ApiClient.convertToType(data['about'], 'string');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'string');
            }
            if (data.hasOwnProperty('regDate')) {
                obj['regDate'] = ApiClient.convertToType(data['regDate'], 'Date');
            }
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], ['string']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'string');
            }
            if (data.hasOwnProperty('socialLinks')) {
                obj['socialLinks'] = ApiClient.convertToType(data['socialLinks'], [SocialLinkViewModel]);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache



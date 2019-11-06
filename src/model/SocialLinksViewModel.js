/**
 * Core API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import SocialLinkViewModel from './SocialLinkViewModel';





/**
 *
 * @interface SocialLinksViewModel
 */

/**
 *
 * @name SocialLinksViewModel#socialLinks
 * @type {Array<SocialLinkViewModel>}
 */





export default class SocialLinksViewModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SocialLinksViewModel();

            
            
            

            if (data.hasOwnProperty('socialLinks')) {
                obj['socialLinks'] = ApiClient.convertToType(data['socialLinks'], [SocialLinkViewModel]);
            }
        }
        return obj;
    }

    socialLinks = undefined;








}






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
import NotificationSettingViewModel from './NotificationSettingViewModel';





/**
* The FundNotificationSettingList model module.
* @module model/FundNotificationSettingList
* @version v1.0
*/
export default class FundNotificationSettingList {
    /**
    * Constructs a new <code>FundNotificationSettingList</code>.
    * @alias module:model/FundNotificationSettingList
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>FundNotificationSettingList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FundNotificationSettingList} obj Optional instance to populate.
    * @return {module:model/FundNotificationSettingList} The populated <code>FundNotificationSettingList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundNotificationSettingList();

            
            
            

            if (data.hasOwnProperty('assetId')) {
                obj['assetId'] = ApiClient.convertToType(data['assetId'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('settingsGeneral')) {
                obj['settingsGeneral'] = ApiClient.convertToType(data['settingsGeneral'], [NotificationSettingViewModel]);
            }
        }
        return obj;
    }

    /**
    * @member {String} assetId
    */
    assetId = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {String} url
    */
    url = undefined;
    /**
    * @member {String} logo
    */
    logo = undefined;
    /**
    * @member {String} color
    */
    color = undefined;
    /**
    * @member {Array.<module:model/NotificationSettingViewModel>} settingsGeneral
    */
    settingsGeneral = undefined;








}



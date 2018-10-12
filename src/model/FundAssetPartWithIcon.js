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





/**
* The FundAssetPartWithIcon model module.
* @module model/FundAssetPartWithIcon
* @version v1.0
*/
export default class FundAssetPartWithIcon {
    /**
    * Constructs a new <code>FundAssetPartWithIcon</code>.
    * @alias module:model/FundAssetPartWithIcon
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>FundAssetPartWithIcon</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FundAssetPartWithIcon} obj Optional instance to populate.
    * @return {module:model/FundAssetPartWithIcon} The populated <code>FundAssetPartWithIcon</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundAssetPartWithIcon();

            
            
            

            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('asset')) {
                obj['asset'] = ApiClient.convertToType(data['asset'], 'String');
            }
            if (data.hasOwnProperty('percent')) {
                obj['percent'] = ApiClient.convertToType(data['percent'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} icon
    */
    icon = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} asset
    */
    asset = undefined;
    /**
    * @member {Number} percent
    */
    percent = undefined;








}



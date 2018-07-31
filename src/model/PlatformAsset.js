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
* The PlatformAsset model module.
* @module model/PlatformAsset
* @version v1.0
*/
export default class PlatformAsset {
    /**
    * Constructs a new <code>PlatformAsset</code>.
    * @alias module:model/PlatformAsset
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PlatformAsset</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PlatformAsset} obj Optional instance to populate.
    * @return {module:model/PlatformAsset} The populated <code>PlatformAsset</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformAsset();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} symbol
    */
    symbol = undefined;
    /**
    * @member {String} description
    */
    description = undefined;








}



/**
 * Core API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The FreeTokens model module.
* @module model/FreeTokens
* @version v1
*/
export default class FreeTokens {
    /**
    * Constructs a new <code>FreeTokens</code>.
    * @alias module:model/FreeTokens
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>FreeTokens</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FreeTokens} obj Optional instance to populate.
    * @return {module:model/FreeTokens} The populated <code>FreeTokens</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FreeTokens();

            
            
            

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('investorsTokens')) {
                obj['investorsTokens'] = ApiClient.convertToType(data['investorsTokens'], 'Number');
            }
            if (data.hasOwnProperty('requestsTokens')) {
                obj['requestsTokens'] = ApiClient.convertToType(data['requestsTokens'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} total
    */
    total = undefined;
    /**
    * @member {Number} investorsTokens
    */
    investorsTokens = undefined;
    /**
    * @member {Number} requestsTokens
    */
    requestsTokens = undefined;








}



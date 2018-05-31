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
* The TwoFactorCodeModel model module.
* @module model/TwoFactorCodeModel
* @version v1
*/
export default class TwoFactorCodeModel {
    /**
    * Constructs a new <code>TwoFactorCodeModel</code>.
    * @alias module:model/TwoFactorCodeModel
    * @class
    * @param twoFactorCode {String} 
    * @param password {String} 
    */

    constructor(twoFactorCode, password) {
        

        
        

        this['twoFactorCode'] = twoFactorCode;this['password'] = password;

        
    }

    /**
    * Constructs a <code>TwoFactorCodeModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TwoFactorCodeModel} obj Optional instance to populate.
    * @return {module:model/TwoFactorCodeModel} The populated <code>TwoFactorCodeModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TwoFactorCodeModel();

            
            
            

            if (data.hasOwnProperty('twoFactorCode')) {
                obj['twoFactorCode'] = ApiClient.convertToType(data['twoFactorCode'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} twoFactorCode
    */
    twoFactorCode = undefined;
    /**
    * @member {String} password
    */
    password = undefined;








}



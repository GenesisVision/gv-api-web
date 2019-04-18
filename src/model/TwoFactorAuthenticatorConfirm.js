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
 *
 * @interface TwoFactorAuthenticatorConfirm
 */

/**
 *
 * @name TwoFactorAuthenticatorConfirm#code
 * @type {String}
 */
/**
 *
 * @name TwoFactorAuthenticatorConfirm#sharedKey
 * @type {String}
 */
/**
 *
 * @name TwoFactorAuthenticatorConfirm#password
 * @type {String}
 */





export default class TwoFactorAuthenticatorConfirm {

    constructor(code, sharedKey, password) {
        

        
        

        this['code'] = code;this['sharedKey'] = sharedKey;this['password'] = password;

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TwoFactorAuthenticatorConfirm();

            
            
            

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('sharedKey')) {
                obj['sharedKey'] = ApiClient.convertToType(data['sharedKey'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }

    code = undefined;
    sharedKey = undefined;
    password = undefined;








}







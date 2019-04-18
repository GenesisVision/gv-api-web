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
 * @interface ProgramPwdUpdate
 */

/**
 *
 * @name ProgramPwdUpdate#password
 * @type {String}
 */
/**
 *
 * @name ProgramPwdUpdate#twoFactorCode
 * @type {String}
 */





export default class ProgramPwdUpdate {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramPwdUpdate();

            
            
            

            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('twoFactorCode')) {
                obj['twoFactorCode'] = ApiClient.convertToType(data['twoFactorCode'], 'String');
            }
        }
        return obj;
    }

    password = undefined;
    twoFactorCode = undefined;








}







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
import TwoFactorAuthenticator from './TwoFactorAuthenticator';





/**
 *
 * @interface ProgramCreateResult
 */

/**
 *
 * @name ProgramCreateResult#programId
 * @type {String}
 */
/**
 *
 * @name ProgramCreateResult#twoFactorRequired
 * @type {Boolean}
 */
/**
 *
 * @name ProgramCreateResult#twoFactor
 * @type {TwoFactorAuthenticator}
 */





export default class ProgramCreateResult {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramCreateResult();

            
            
            

            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'String');
            }
            if (data.hasOwnProperty('twoFactorRequired')) {
                obj['twoFactorRequired'] = ApiClient.convertToType(data['twoFactorRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('twoFactor')) {
                obj['twoFactor'] = TwoFactorAuthenticator.constructFromObject(data['twoFactor']);
            }
        }
        return obj;
    }

    programId = undefined;
    twoFactorRequired = undefined;
    twoFactor = undefined;








}







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
 * @interface ChangeBrokerProgramRequest
 */

/**
 *
 * @name ChangeBrokerProgramRequest#programId
 * @type {String}
 */
/**
 *
 * @name ChangeBrokerProgramRequest#newBrokerAccountTypeId
 * @type {String}
 */
/**
 *
 * @name ChangeBrokerProgramRequest#newLeverage
 * @type {Number}
 */





export default class ChangeBrokerProgramRequest {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeBrokerProgramRequest();

            
            
            

            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'String');
            }
            if (data.hasOwnProperty('newBrokerAccountTypeId')) {
                obj['newBrokerAccountTypeId'] = ApiClient.convertToType(data['newBrokerAccountTypeId'], 'String');
            }
            if (data.hasOwnProperty('newLeverage')) {
                obj['newLeverage'] = ApiClient.convertToType(data['newLeverage'], 'Number');
            }
        }
        return obj;
    }

    programId = undefined;
    newBrokerAccountTypeId = undefined;
    newLeverage = undefined;








}







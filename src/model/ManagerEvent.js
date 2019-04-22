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
 * @interface ManagerEvent
 */

/**
 *
 * @name ManagerEvent#programs
 * @type {Array<String>}
 */
/**
 *
 * @name ManagerEvent#funds
 * @type {Array<String>}
 */





export default class ManagerEvent {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManagerEvent();

            
            
            

            if (data.hasOwnProperty('programs')) {
                obj['programs'] = ApiClient.convertToType(data['programs'], ['String']);
            }
            if (data.hasOwnProperty('funds')) {
                obj['funds'] = ApiClient.convertToType(data['funds'], ['String']);
            }
        }
        return obj;
    }

    programs = undefined;
    funds = undefined;








}







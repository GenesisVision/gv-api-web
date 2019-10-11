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
import BrokerOld from './BrokerOld';





/**
 *
 * @interface BrokersProgramInfoOld
 */

/**
 *
 * @name BrokersProgramInfoOld#brokers
 * @type {Array<BrokerOld>}
 */
/**
 *
 * @name BrokersProgramInfoOld#currentAccountTypeId
 * @type {String}
 */





export default class BrokersProgramInfoOld {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrokersProgramInfoOld();

            
            
            

            if (data.hasOwnProperty('brokers')) {
                obj['brokers'] = ApiClient.convertToType(data['brokers'], [BrokerOld]);
            }
            if (data.hasOwnProperty('currentAccountTypeId')) {
                obj['currentAccountTypeId'] = ApiClient.convertToType(data['currentAccountTypeId'], 'String');
            }
        }
        return obj;
    }

    brokers = undefined;
    currentAccountTypeId = undefined;








}






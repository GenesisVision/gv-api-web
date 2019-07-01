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
 * @interface BrokerDetails
 */

/**
 *
 * @name BrokerDetails#isForex
 * @type {Boolean}
 */
/**
 *
 * @name BrokerDetails#logo
 * @type {String}
 */
/**
 *
 * @name BrokerDetails#showSwaps
 * @type {Boolean}
 */
/**
 *
 * @name BrokerDetails#showTickets
 * @type {Boolean}
 */
/**
 *
 * @name BrokerDetails#name
 * @type {String}
 */





export default class BrokerDetails {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrokerDetails();

            
            
            

            if (data.hasOwnProperty('isForex')) {
                obj['isForex'] = ApiClient.convertToType(data['isForex'], 'Boolean');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('showSwaps')) {
                obj['showSwaps'] = ApiClient.convertToType(data['showSwaps'], 'Boolean');
            }
            if (data.hasOwnProperty('showTickets')) {
                obj['showTickets'] = ApiClient.convertToType(data['showTickets'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    isForex = undefined;
    logo = undefined;
    showSwaps = undefined;
    showTickets = undefined;
    name = undefined;








}







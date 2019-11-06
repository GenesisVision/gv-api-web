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
import SignalTradingEvent from './SignalTradingEvent';





/**
 *
 * @interface SignalTradingEvents
 */

/**
 *
 * @name SignalTradingEvents#events
 * @type {Array<SignalTradingEvent>}
 */
/**
 *
 * @name SignalTradingEvents#total
 * @type {Number}
 */





export default class SignalTradingEvents {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignalTradingEvents();

            
            
            

            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [SignalTradingEvent]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    events = undefined;
    total = undefined;








}





